from flask import Blueprint, jsonify, redirect, request
from flask_login import login_required, current_user
from app.models import db, Review, Game, User
from app.forms import GameForm
from .auth_routes import validation_errors_to_error_messages

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
        return spot.to_dict()
    else:
        return {"error": "Game could not be found"}, 404
