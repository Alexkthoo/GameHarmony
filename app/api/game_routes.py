from flask import Blueprint, jsonify, redirect, request
from flask_login import login_required, current_user
from app.models import db, Review, Game, User
from app.forms import GameForm, review_form
from .auth_routes import validation_errors_to_error_messages
from .aws_helpers import upload_file_to_s3, get_unique_filename, remove_file_from_s3

game_routes = Blueprint("games", __name__)

@game_routes.route("/")
def get_all_games():
    '''
    GET LIST OF ALL GAMESS
    '''
    games = Game.query.all()
    return jsonify([game.to_dict() for game in games])

@game_routes.route("/<int:id>")
def get_game(id):
    '''
    GET SINGLE GAME PAGE
    '''

    game = Game.query.get(id)
    if game:
        return game.to_dict()
    else:
        return {"error": "Game could not be found"}, 404


@game_routes.route("/new", methods=["POST"])
@login_required
def create_game():
    '''
    CREATE A NEW GAME
    '''

    form = GameForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        newGame = Game(
            game_title=form.data["game_title"],
            price=form.data["price"],
            developer=form.data["developer"],
            publisher=form.data["publisher"],
            about_game=form.data["about_game"],
            description=form.data["description"],
            system_support=form.data["system_support"],
            user_id=current_user.id,
        )

        img = form.data["img"]
        img.filename = get_unique_filename(img.filename)
        uploadPreviewImage = upload_file_to_s3(img)

        if "url" not in uploadPreviewImage:
            print(uploadPreviewImage)
            return uploadPreviewImage
        else:
            newGame.img = uploadPreviewImage["url"]



        db.session.add(newGame)
        db.session.commit()
        return {"game": newGame.to_dict()}

    return {'errors': form.errors}, 400

@game_routes.route('/<int:id>',methods=['PUT'])
@login_required
def update_game(id):
    '''
    UPDATE A GAME (WHILE LOG IN)
    '''

    game = Game.query.get(id)

    if not game:
        return {"message": "Game not found"}, 404

    form = GameForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        game.game_title = form.data["game_title"]
        game.price = form.data["price"]
        game.developer = form.data["developer"]
        game.publisher = form.data["publisher"]
        game.about_game = form.data["about_game"]
        game.description = form.data["description"]
        game.system_support = form.data["system_support"]

        db.session.commit()

        return {"Update Game": game.to_dict()}
    else:
        return {"error": form.errors}, 400


@game_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_game(id):
    """
    Delete game (while logged in)
    """
    currentGame = Game.query.get(id)

    if not currentGame:
        return {'error': 'Game does not exists'}, 404

    if currentGame.user_id != current_user.id:
        return {'error': 'You do not have permission to delete this game'}, 401




    db.session.delete(currentGame)
    db.session.commit()
    return {'error': 'Game successfully deleted'}
