from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class Game(db.Model):
    __tablename__ = 'games'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    game_title = db.Column(db.String(255), nullable=False, unique=True)
    price = db.Column(db.Float, nullable=False)
    developer = db.Column(db.String, nullable=False)
    publisher = db.Column(db.String(255), nullable=False)
    about_game = db.Column(db.String(400), nullable=False)
    description = db.Column(db.String(3000), nullable=False)
    img = db.Column(db.String, nullable=False)
    system_support = db.Column(db.String(100), nullable=False)


    #foreign keys
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))

    #relationship
    # game belong to one user
    user = db.relationship("User", back_populates="game")

    # game can have many reviews, game is parent of review
    review = db.relationship("Review", back_populates="game", cascade='all, delete')


    def to_dict(self):
        return {
            'id': self.id,
            'game_title': self.game_title,
            'price': self.price,
            'developer': self.developer,
            'publisher': self.publisher,
            'about_game': self.about_game,
            'description': self.description,
            'img': self.img,
            'system_support': self.system_support,
            'user_id': self.user_id
        }
