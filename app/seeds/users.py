from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text
from faker import Faker

faker = Faker()


# Adds a demo user, you can add other users here if you want
def seed_users():
    user1 = User(
        username='Demo', email='demo@aa.io', password='password', )
    user2 = User(
        username='alex', email='alex@aa.io', password='password')
    user3 = User(
        username='yoshi', email='yoshi@aa.io', password='password')
    user4 = User(
        username=faker.user_name(), email=faker.email(), password=faker.password())
    user5 = User(
        username=faker.user_name(), email=faker.email(), password=faker.password())
    user6 = User(
        username=faker.user_name(), email=faker.email(), password=faker.password())

    db.session.add(user1)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)
    db.session.add(user6)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
