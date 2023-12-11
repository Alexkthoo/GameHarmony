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
    system_support = "PC Master Race",
    user_id = 3
    ),
    Game(
        game_title="Overwatch",
        price=30,
        developer="Blizzard Entertainment",
        publisher="Blizzard Entertainment",
        about_game="Overwatch is a team-based multiplayer first-person shooter game. Players choose from a diverse cast of heroes, each with unique abilities, and engage in fast-paced battles to achieve objectives.",
        description="temp info for now",
        img="https://waytoomany.games/wp-content/uploads/2022/10/overwatch-2-cover.jpg",
        system_support="PC Master Race",
        user_id=15
    ),
    Game(
        game_title="Fortnite",
        price=0,
        developer="Epic Games",
        publisher="Epic Games",
        about_game="Fortnite is a popular battle royale game with a unique building mechanic. Players compete to be the last one standing in a constantly shrinking play area.",
        description="temp info for now",
        img="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/875/598/datas/original.jpg",
        system_support="PC Master Race",
        user_id=16
    ),
    Game(
        game_title="Doom Eternal",
        price=40,
        developer="id Software",
        publisher="Bethesda Softworks",
        about_game="Doom Eternal is a first-person shooter that continues the iconic Doom series. Players battle demons from Hell with an arsenal of powerful weapons in intense and fast-paced combat.",
        description="temp info for now",
        img="https://assets.xboxservices.com/assets/34/0a/340ada26-49f7-48f1-a572-b27dd6ec766b.jpg?n=DOOM-Eternal_GLP-Page-Hero-0_1083x609_02.jpg",
        system_support="PC Master Race",
        user_id=17
    ),
    Game(
        game_title="FIFA 22",
        price=50,
        developer="EA Vancouver",
        publisher="Electronic Arts",
        about_game="FIFA 22 is a football simulation game that brings realistic gameplay and updated features. It includes various game modes, including career mode and Ultimate Team.",
        description="temp info for now",
        img="https://cdn.wccftech.com/wp-content/uploads/2021/08/fifa-22.jpg",
        system_support="PS5",
        user_id=18
    ),
    Game(
        game_title="Borderlands 3",
        price=45,
        developer="Gearbox Software",
        publisher="2K Games",
        about_game="Borderlands 3 is a first-person looter-shooter game with a focus on cooperative multiplayer. Players explore the planet of Pandora, completing missions and collecting loot.",
        description="temp info for now",
        img="https://cdn-ext.fanatical.com/production/product/1280x720/381d7788-ccc9-42e0-a237-00cd329b69eb.jpeg",
        system_support="PC Master Race",
        user_id=19
    ),
    Game(
        game_title="Horizon Zero Dawn",
        price=40,
        developer="Guerrilla Games",
        publisher="Sony Interactive Entertainment",
        about_game="Horizon Zero Dawn is an action role-playing game set in a post-apocalyptic world. Players control Aloy, a hunter, in an open world filled with robotic creatures.",
        description="temp info for now",
        img="https://cdn1.epicgames.com/3328b08ac1c14540aa265a1a85c07839/offer/hzd_wide-2560x1440-bd312be05c49cf339097777c493cb899.jpg",
        system_support="PS5",
        user_id=20
    ),
    Game(
        game_title="Mortal Kombat 11",
        price=35,
        developer="NetherRealm Studios",
        publisher="Warner Bros. Interactive Entertainment",
        about_game="Mortal Kombat 11 is a fighting game known for its brutal combat and iconic characters. Players engage in one-on-one battles and perform fatalities to defeat opponents.",
        description="temp info for now",
        img="https://image.api.playstation.com/vulcan/ap/rnd/202010/0822/4WzxHtmjXV1dQpWqj1B6UAMk.jpg",
        system_support="PS5",
        user_id=21
    ),
    Game(
        game_title="NBA 2K22",
        price=55,
        developer="Visual Concepts",
        publisher="2K Games",
        about_game="NBA 2K22 is a basketball simulation game that offers realistic gameplay and updated features. It includes various game modes, such as MyCareer and MyTeam.",
        description="temp info for now",
        img="https://i.ytimg.com/vi/6aJo9ziVwKA/maxresdefault.jpg",
        system_support="PS5",
        user_id=22
    ),
    Game(
        game_title="Monster Hunter: World",
        price=50,
        developer="Capcom",
        publisher="Capcom",
        about_game="Monster Hunter: World is an action role-playing game where players hunt and defeat various monsters. It features cooperative multiplayer and a living, breathing ecosystem.",
        description="temp info for now",
        img="https://www.trueachievements.com/customimages/075176.jpg",
        system_support="PC Master Race",
        user_id=23
    ),
    Game(
        game_title="The Witcher 3: Wild Hunt",
        price=35,
        developer="CD Projekt",
        publisher="CD Projekt",
        about_game="The Witcher 3: Wild Hunt is an open-world action role-playing game. Players control Geralt of Rivia as he embarks on a quest in a vast fantasy world filled with monsters and political intrigue.",
        description="temp info for now",
        img="https://comiconverse.com/wp-content/uploads/2016/09/Witcher3title-1.jpg",
        system_support="PS5",
        user_id=24
    ),
        ]

    db.session.add_all(games)
    db.session.commit()



def undo_games():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.games RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM games"))

    db.session.commit()
