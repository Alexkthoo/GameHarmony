from flask import Blueprint, jsonify, redirect, request
from flask_login import login_required, current_user
from app.models import db, Review, Game, User
from app.forms import GameForm, review_form
from .auth_routes import validation_errors_to_error_messages
from .aws_helpers import upload_file_to_s3, get_unique_filename, remove_file_from_s3

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
