from app.models import db, environment, SCHEMA, Game, Review
from sqlalchemy.sql import text
from faker import Faker
from datetime import date

# faker = Faker()

def seed_reviews():
    review1 = Review(
    rating = True,
    description = "Great game would play again",
    created_at = date.today(),
    user_id = 2,
    game_id = 1
    )

    review2 = Review(
    rating = False,
    description = "THIS IS A VERY VERY BORRRRRRRRRRRRRRING GAME",
    created_at = date.today(),
    user_id = 2,
    game_id = 3
    )

    review3 = Review(
    rating = False,
    description = "It is fun whenever they release a new season/expansion. In between each season can be long and boring",
    created_at = date.today(),
    user_id = 3,
    game_id = 1
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.commit()



def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
