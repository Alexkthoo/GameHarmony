from app.models import db, environment, SCHEMA, Game, Review
from sqlalchemy.sql import text
from faker import Faker
from datetime import date
import random


def seed_reviews():
    fake = Faker()

    for _ in range(50):  # Change this number if you want to create more reviews
        review = Review(
            rating=random.choice([True, False]),  # Random True or False
            description=fake.text(),  # Generate a random description
            created_at=date.today(),
            user_id=random.randint(1, 24),  # Random user_id between 1 and 24
            game_id=random.randint(1, 40),  # Random game_id between 1 and 40
        )

        db.session.add(review)

    db.session.commit()



def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
