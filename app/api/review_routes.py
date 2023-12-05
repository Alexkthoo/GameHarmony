from flask import Blueprint, jsonify, redirect, request
from flask_login import login_required, current_user
from app.models import db, Review, Game, User
from app.forms import GameForm, ReviewForm
from .auth_routes import validation_errors_to_error_messages
from .aws_helpers import upload_file_to_s3, get_unique_filename, remove_file_from_s3
from datetime import datetime

review_routes = Blueprint("reviews", __name__)

@review_routes.route("/")
def get_all_reviews():
    '''
    GET ALL REVIEWS
    '''
    reviews = Review.query.all()
    return jsonify([review.to_dict() for review in reviews])

@review_routes.route("/<int:game_id>")
def game_reviews(game_id):
    '''
    GET REVIEWS FOR A GAME
    '''

    reviews = Review.query.filter_by(game_id=game_id).all()
    return jsonify([review.to_dict() for review in reviews])


@review_routes.route('/<int:id>/reviews/new', methods=['POST'])
@login_required
def add_game_review(id):
    '''
    CREATE A REVIEW FOR A GAME
    '''
    game = Game.query.get(id)

    #if game is owned by the same owner trying to write a review, throw error.
    if game.user_id == current_user.id:
        return {"message": "Forbidden"}, 403

    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        newReview = Review(
            rating=form.data['rating'],
            review=form.data['review'],
            created_at=datetime.now(),
            user_id=current_user.id,
            game_id=id
        )

        if form.data['img']:
            img = form.data["img"]
            img.filename = get_unique_filename(img.filename)
            uploadReviewImage = upload_file_to_s3(img)

            if "url" not in uploadReviewImage:
                print(uploadReviewImage)
                return uploadReviewImage
            else:
                newReview.img = uploadReviewImage["url"]

        db.session.add(newReview)
        db.session.commit()

        return {"review": newReview.to_dict()}

    return {"errors": form.errors}, 400
