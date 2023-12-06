from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Boolean, nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    img = db.Column(db.String)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    #foreign keys
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    game_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("games.id")))

    #relationship
    # a user can have lots of reviews
    user = db.relationship("User", back_populates="review")

    # a game can have lots of reviews
    game = db.relationship("Game", back_populates="review")


    def to_dict(self):
        return {
            'id': self.id,
            'rating': self.rating,
            'description': self.description,
            'created_at': self.created_at,
            'user_id': self.user_id,
            'game_id': self.game_id,
            'user': self.user.to_dict()
        }
