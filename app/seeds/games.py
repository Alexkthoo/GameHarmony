from app.models import db, environment, SCHEMA, Game
from sqlalchemy.sql import text
from faker import Faker

# faker = Faker()

def seed_games():
    game1 = Game(
    game_title = "The Legend of Zelda: Breath of the Wild",
    price = 60,
    developer = "Nintendo EPD",
    publisher = "Nintendo",
    about_game = "The Legend of Zelda: Breath of the Wild wiki strategy guide includes a full game Walkthrough to all dungeons, Interactive Map of all important locations, like Shrines, collectibles like Memories and Korok Seed locations, and many other helpful sections. The Legend of Zelda: BOTW was released for Wii U and Nintendo Switch on March 3, 2017.",
    description = "temp info for now",
    img = "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    system_support = "Switch",
    user_id = 1
    )

    game2 = Game(
    game_title = "God of War",
    price = 50,
    developer = "Santa Monica Studio",
    publisher = "Sony Interactive Entertainment",
    about_game = "God of War is an action-adventure game franchise created by David Jaffe at Sony's Santa Monica Studio. It began in 2005 on the PlayStation 2 video game console and has become a flagship series for PlayStation, consisting of nine installments across multiple platforms.",
    description = "temp info for now",
    img = "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/p3pYq0QxntZQREXRVdAzmn1w.png",
    system_support = "PS5",
    user_id = 2
    )

    game3 = Game(
    game_title = "World of Warcraft",
    price = 40,
    developer = "Blizzard Entertainment",
    publisher = "Blizzard Entertainment",
    about_game = "The game's lore is incredibly deep and complex, and it includes a multitude of different characters, races, classes, factions, and locations. The lore is so vast in fact, that Blizzard could never hope to tell the full story in a single installment, which is why they will never run out of material for WoW expansions.",
    description = "temp info for now",
    img = "https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt49ecf5a649fbaf0c/6526c909c9cf4e07ce162d24/10.0_Dragonflight_BrowsingCard_960x540_enUS.jpg",
    system_support = "PC",
    user_id = 3
    )

    db.session.add(game1)
    db.session.add(game2)
    db.session.add(game3)
    db.session.commit()



def undo_games():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.games RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM games"))

    db.session.commit()
