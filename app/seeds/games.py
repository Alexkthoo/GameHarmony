from app.models import db, environment, SCHEMA, Game
from sqlalchemy.sql import text
from faker import Faker

# faker = Faker()

def seed_games():
    games= [
        Game(game_title = "The Legend of Zelda: Breath of the Wild", price = 60, developer = "Nintendo EPD", publisher = "Nintendo", about_game = "The Legend of Zelda: Breath of the Wild wiki strategy guide includes a full game Walkthrough to all dungeons, Interactive Map of all important locations, like Shrines, collectibles like Memories and Korok Seed locations, and many other helpful sections. The Legend of Zelda: BOTW was released for Wii U and Nintendo Switch on March 3, 2017.", description = "temp info for now", img = "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg", system_support = "Switch", user_id = 1),
        Game(
    game_title="God of War II",
    price=55,
    developer="Santa Monica Studio",
    publisher="Sony Interactive Entertainment",
    about_game="God of War II continues the story of Kratos as he seeks revenge on the gods of Olympus. With new weapons and abilities, Kratos must face powerful foes and overcome challenging puzzles in this epic action-adventure game.",
    description="temp info for now",
    img="https://coverproject.sfo2.cdn.digitaloceanspaces.com/playstation_2/ps2_godofwar2_eu_thumb.jpg",
    system_support="PS5",
    user_id=2
),

Game(
    game_title="StarCraft II: Wings of Liberty",
    price=40,
    developer="Blizzard Entertainment",
    publisher="Blizzard Entertainment",
    about_game="StarCraft II: Wings of Liberty is a real-time strategy game that continues the epic saga of the Protoss, Terran, and Zerg. With a compelling single-player campaign and intense multiplayer battles, it remains a cornerstone in the RTS genre.",
    description="temp info for now",
    img="https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
    system_support="PC",
    user_id=3
),

Game(
    game_title="Cyberpunk 2078",
    price=65,
    developer="CD Projekt",
    publisher="CD Projekt",
    about_game="Cyberpunk 2078 takes the immersive open-world experience to new heights. Set in a dystopian future, players navigate the bustling city of Night City, encountering cyber-enhanced characters and engaging in gripping narrative-driven quests.",
    description="temp info for now",
    img="https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
    system_support="PC, PS5, Xbox Series X/S",
    user_id=4
),

Game(
    game_title="The Sims 4",
    price=35,
    developer="Maxis",
    publisher="Electronic Arts",
    about_game="The Sims 4 allows players to create and control people in a virtual world. With new features and expanded creativity, players can build unique homes, develop relationships, and shape the lives of their Sims.",
    description="temp info for now",
    img="https://m.media-amazon.com/images/I/71otyq1xFNL._AC_UF1000,1000_QL80_.jpg",
    system_support="PC, PS4, Xbox One",
    user_id=5
),

Game(
    game_title="Call of Duty: Warzone",
    price=0,
    developer="Infinity Ward",
    publisher="Activision",
    about_game="Call of Duty: Warzone is a free-to-play battle royale game where 150 players compete to be the last squad standing. With fast-paced action and a variety of weapons, it's a thrilling experience for FPS enthusiasts.",
    description="temp info for now",
    img="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg",
    system_support="PC, PS4, Xbox One",
    user_id=6
),

Game(
    game_title="Rocket League",
    price=20,
    developer="Psyonix",
    publisher="Psyonix",
    about_game="Rocket League combines soccer with rocket-powered vehicles, offering a unique and addictive gameplay experience. With customizable cars and competitive online matches, it has become a favorite for players of all ages.",
    description="temp info for now",
    img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rocket_League_coverart.jpg/640px-Rocket_League_coverart.jpg",
    system_support="PC, PS4, Xbox One, Switch",
    user_id=7
),

Game(
    game_title="Assassin's Creed Odyssey",
    price=50,
    developer="Ubisoft Quebec",
    publisher="Ubisoft",
    about_game="Assassin's Creed Odyssey takes players to ancient Greece, where they embark on a grand adventure as a mercenary. With a vast open world and impactful choices, it's a journey filled with mythology and intrigue.",
    description="temp info for now",
    img="https://image.api.playstation.com/vulcan/ap/rnd/202008/2707/TVB4FB1nnoKbl7LrSIJrUqTV.png",
    system_support="PC, PS4, Xbox One",
    user_id=8
),

Game(
    game_title="Fallout 4",
    price=30,
    developer="Bethesda Game Studios",
    publisher="Bethesda Softworks",
    about_game="Fallout 4 is an open-world action role-playing game set in a post-apocalyptic wasteland. With a dynamic story, diverse characters, and the ability to build and customize settlements, it offers hours of immersive gameplay.",
    description="temp info for now",
    img="https://cdn.vox-cdn.com/thumbor/uGWXdOIAIIwAD5DVp_PNBBVqDxE=/0x5:728x490/1200x800/filters:focal(0x5:728x490)/cdn.vox-cdn.com/uploads/chorus_image/image/47616175/meaning-of-vault-boy-thumbs-up.0.0.jpg",
    system_support="PC, PS4, Xbox One",
    user_id=9
),

Game(
    game_title="League of Legends",
    price=0,
    developer="Riot Games",
    publisher="Riot Games",
    about_game="League of Legends is a highly popular multiplayer online battle arena (MOBA) game. Players choose unique champions and engage in strategic team-based battles in the quest for victory.",
    description="temp info for now",
    img="https://www.leagueoflegends.com/static/open-graph-b580f0266cc3f0589d0dc10765bc1631.jpg",
    system_support="PC",
    user_id=10
),

Game(
    game_title="The Elder Scrolls Online",
    price=40,
    developer="ZeniMax Online Studios",
    publisher="Bethesda Softworks",
    about_game="The Elder Scrolls Online offers a vast multiplayer online world set in the Elder Scrolls universe. With diverse regions, quests, and player interactions, it provides an expansive and immersive RPG experience.",
    description="temp info for now",
    img="https://assets.xboxservices.com/assets/e3/23/e323f261-77ad-47cd-95e7-b28626f8951d.jpg?n=Elder-Scrolls-Online_GLP-Page-Hero-0_1083x609_02.jpg",
    system_support="PC, PS4, Xbox One",
    user_id=11
),

Game(
    game_title="Red Dead Redemption 2",
    price=55,
    developer="Rockstar Studios",
    publisher="Rockstar Games",
    about_game="Red Dead Redemption 2 is an epic tale of life in America's unforgiving heartland. The game's vast and atmospheric world also provides the foundation for a brand new online multiplayer experience.",
    description="temp info for now",
    img="https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
    system_support="PS4, Xbox One",
    user_id=12
),


Game(
    game_title = "God of War",
    price = 50,
    developer = "Santa Monica Studio",
    publisher = "Sony Interactive Entertainment",
    about_game = "God of War is an action-adventure game franchise created by David Jaffe at Sony's Santa Monica Studio. It began in 2005 on the PlayStation 2 video game console and has become a flagship series for PlayStation, consisting of nine installments across multiple platforms.",
    description = "temp info for now",
    img = "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/p3pYq0QxntZQREXRVdAzmn1w.png",
    system_support = "PS5",
    user_id = 2
    ),

    Game(
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
        ]

    db.session.add_all(games)
    db.session.commit()



def undo_games():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.games RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM games"))

    db.session.commit()
