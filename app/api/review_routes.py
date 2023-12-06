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

@review_routes.route("/<int:id>/reviews")
def reviews_by_id(id):
    '''
    GET REVIEWS BY AN ID
    '''

    reviews = Review.query.filter_by(id=id).all()
    return jsonify([review.to_dict() for review in reviews])

@review_routes.route("/<int:game_id>/game")
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

    # if game is owned by the same owner trying to write a review, throw error.
    if game.user_id == current_user.id:
        return {"message": "Forbidden"}, 403

    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    print("!!!!!!Received form data:!!!!!!!", request.form)  # Add this line to check the received form data

    if form.validate_on_submit():
        print("!!!!!!!Rating before creating new review:!!!!!!!", form.data['rating'])  # Add this line to check the value of 'rating'

        newReview = Review(
            rating=form.data['rating'],
            description=form.data['description'],
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

    print("!!!!!!!!!!Form validation errors:!!!!!!!!!", form.errors)  # Add this line to check form validation errors
    return {"errors": form.errors}, 400


@review_routes.route("/<int:id>/update", methods=["PUT"])
@login_required
def update_review(id):
    '''
    update an existing review
    '''
    review = Review.query.get(id)
    if not review:
        return {"error": "Review not found"}, 404

    if review.user_id != current_user.id:
        return {"message": "Forbidden"}, 403

    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        review.rating = form.data["rating"]
        review.description = form.data["description"]

        db.session.commit()

        return {"updateReview": review.to_dict()}
    else:
        return {"error": form.errors}, 400

@review_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_review(id):
    review = Review.query.get(id)
    if not review:
        return {"message": "Review not found"}, 404

    elif review.user_id != current_user.id:
        return {"message": "You do not have permission to delete this review"}, 403
    else:
        db.session.delete(review)
        db.session.commit()
        return {"message": "Review delete successfully"}
