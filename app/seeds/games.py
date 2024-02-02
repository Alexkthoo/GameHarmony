from app.models import db, environment, SCHEMA, Game
from sqlalchemy.sql import text
from faker import Faker

# faker = Faker()

def seed_games():
    games= [
        Game(game_title = "The Legend of Zelda: Breath of the Wild", price = 60, developer = "Nintendo EPD", publisher = "Nintendo", about_game = "The Legend of Zelda: Breath of the Wild wiki strategy guide includes a full game Walkthrough to all dungeons, Interactive Map of all important locations, like Shrines, collectibles like Memories and Korok Seed locations, and many other helpful sections. The Legend of Zelda: BOTW was released for Wii U and Nintendo Switch on March 3, 2017.", description = "temp info for now", img = "https://www.justpressplayonline.com/img/blog/Blog-Large-botw1.jpg", system_support = "Switch", user_id = 1),
        Game(
    game_title="God of War II",
    price=55,
    developer="Santa Monica Studio",
    publisher="Sony Interactive Entertainment",
    about_game="God of War II continues the story of Kratos as he seeks revenge on the gods of Olympus. With new weapons and abilities, Kratos must face powerful foes and overcome challenging puzzles in this epic action-adventure game.",
    description="temp info for now",
    img="https://i.ytimg.com/vi/QAjwSDecOrU/maxresdefault.jpg",
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
    game_title="Cyberpunk 2077",
    price=65,
    developer="CD Projekt",
    publisher="CD Projekt",
    about_game="Cyberpunk 2077 takes the immersive open-world experience to new heights. Set in a dystopian future, players navigate the bustling city of Night City, encountering cyber-enhanced characters and engaging in gripping narrative-driven quests.",
    description="temp info for now",
    img="https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/b9ea2dc46d95cf9fa3f77209e27ae7a6488368f1-1280x720.jpg",
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
    img="https://image.api.playstation.com/vulcan/img/rnd/202111/3019/Btg9YJMDRcWgsbD5E6rOcdT5.jpg",
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
    img="https://www.thegamecrater.com/wp-content/uploads/2020/11/ACD_EMEA_KEYART_WIDE_UCS_RGB_NoLogo.jpg",
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
    game_title="Minecraft",
    price=30,
    developer="Mojang Studios",
    publisher="Mojang Studios",
    about_game="Minecraft is a sandbox game that lets players build and explore blocky worlds. It offers endless creativity, survival challenges, and a thriving modding community.",
    description="temp info for now",
    img="https://cdn.mos.cms.futurecdn.net/RhxYP5VZuYbpXFdKJSj3Sn.jpg",
    system_support="PC, Xbox, PlayStation, Nintendo Switch",
    user_id=8
),


Game(
    game_title="Animal Crossing: New Horizons",
    price=50,
    developer="Nintendo EPD",
    publisher="Nintendo",
    about_game="Animal Crossing: New Horizons is a life simulation game that lets players create their own island paradise. It's a relaxing and charming experience filled with adorable anthropomorphic animals.",
    description="temp info for now",
    img="https://animalcrossingworld.com/wp-content/uploads/2020/01/animal-crossing-new-horizons-key-artwork-january-2020-large-logo.png",
    system_support="Nintendo Switch",
    user_id=10
),

Game(
    game_title="The Last of Us Part II",
    price=55,
    developer="Naughty Dog",
    publisher="Sony Interactive Entertainment",
    about_game="The Last of Us Part II is an action-adventure game that continues Ellie's story in a post-apocalyptic world. It explores themes of revenge and survival in a harsh environment.",
    description="temp info for now",
    img="https://pbs.twimg.com/media/EUazRzJUEAACLA3.jpg:large",
    system_support="PS4, PS5",
    user_id=11
),

Game(
    game_title="Hollow Knight",
    price=20,
    developer="Team Cherry",
    publisher="Team Cherry",
    about_game="Hollow Knight is a 2D action-platformer set in a beautifully hand-drawn underground world. Players explore, battle creatures, and uncover mysteries in this atmospheric adventure.",
    description="temp info for now",
    img="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1619987265163-9XILMVT3TK4HZ5X6538M/VH_01_1080pjpg.jpg",
    system_support="PC, Xbox, PlayStation, Nintendo Switch",
    user_id=12
),



Game(
    game_title="Resident Evil Village",
    price=50,
    developer="Capcom",
    publisher="Capcom",
    about_game="Resident Evil Village is a survival horror game that follows Ethan Winters as he explores a mysterious village filled with grotesque creatures. It continues the story of Resident Evil 7.",
    description="temp info for now",
    img="https://img.opencritic.com/game/10995/w2OL9oQF.jpg",
    system_support="PC, Xbox, PlayStation",
    user_id=15
),

Game(
    game_title="Death Stranding",
    price=45,
    developer="Kojima Productions",
    publisher="Sony Interactive Entertainment",
    about_game="Death Stranding is an action-adventure game that explores themes of isolation and connection in a post-apocalyptic world. Players traverse a vast, haunting landscape as Sam Porter Bridges.",
    description="temp info for now",
    img="https://xxboxnews.blob.core.windows.net/prod/sites/2/2022/08/DS_PC_HERO-80fb1015e83dca1e68ea.jpg",
    system_support="PC, PS4, PS5",
    user_id=16
),


Game(
    game_title="Cyber Shadow",
    price=20,
    developer="Mechanical Head Studios",
    publisher="Yacht Club Games",
    about_game="Cyber Shadow is a 2D action-platformer that pays homage to classic ninja games. Players control Shadow, a cybernetic ninja, on a mission to save his clan from a mechanical threat.",
    description="temp info for now",
    img="https://www.heypoorplayer.com/wp-content/uploads/2020/12/Indie-World-Showcase-Cyber-Shadow-Title.jpg",
    system_support="PC, Xbox, PlayStation, Nintendo Switch",
    user_id=18
),

Game(
    game_title="Genshin Impact",
    price=0,
    developer="miHoYo",
    publisher="miHoYo",
    about_game="Genshin Impact is an open-world action RPG with gacha elements. Players travel the fantasy world of Teyvat, collect characters with unique abilities, and uncover the mysteries of the land.",
    description="temp info for now",
    img="https://editors.dexerto.com/wp-content/uploads/2020/10/GenshinImpactmiHoYo.jpg",
    system_support="PC, PS4, PS5, iOS, Android",
    user_id=19
),

Game(
    game_title="Dark Souls III",
    price=30,
    developer="FromSoftware",
    publisher="Bandai Namco Entertainment",
    about_game="Dark Souls III is an action RPG known for its challenging gameplay. Players journey through a dark and desolate world, facing formidable bosses and uncovering the lore of the series.",
    description="temp info for now",
    img="https://files.kstatecollegian.com/2016/04/c0bbe758-529f-4fce-ab50-bd88f75149da.jpg",
    system_support="PC, Xbox, PlayStation",
    user_id=20
),

Game(
    game_title="Sekiro: Shadows Die Twice",
    price=50,
    developer="FromSoftware",
    publisher="Activision",
    about_game="Sekiro: Shadows Die Twice is an action-adventure game set in feudal Japan. Players control a shinobi named Wolf as he embarks on a mission of revenge and redemption.",
    description="temp info for now",
    img="https://wallpapers.com/images/hd/sekiro-shadows-die-twice-cover-pgaw054npl3h6o6y.jpg",
    system_support="PC, Xbox, PlayStation",
    user_id=2
),

Game(
    game_title="Among Us",
    price=5,
    developer="Innersloth",
    publisher="Innersloth",
    about_game="Among Us is a multiplayer party game where players work together on a spaceship but some are impostors trying to sabotage the mission. Deduction and teamwork are key.",
    description="temp info for now",
    img="https://pbs.twimg.com/media/E5cWwLNX0AMuZMC.png",
    system_support="PC, iOS, Android",
    user_id=4
),

Game(
    game_title="Celeste",
    price=15,
    developer="Maddy Makes Games",
    publisher="Maddy Makes Games",
    about_game="Celeste is a challenging 2D platformer that tells the story of Madeline's journey up the titular mountain. It explores themes of mental health and determination.",
    description="temp info for now",
    img="https://3.bp.blogspot.com/-bnVIFKTTMAE/WmsM1WDvGUI/AAAAAAAAXGo/iTMHpHmBsjktvH8NmKp9y2bSd1pzZc4uQCLcBGAs/w1200-h630-p-k-no-nu/celeste-capa.jpg",
    system_support="PC, Xbox, PlayStation, Nintendo Switch",
    user_id=5
),

Game(
    game_title="Persona 5",
    price=40,
    developer="Atlus",
    publisher="Atlus",
    about_game="Persona 5 is a Japanese RPG that follows a group of high school students who lead double lives as phantom thieves. They use their Personas to change the hearts of corrupt adults.",
    description="temp info for now",
    img="https://miro.medium.com/v2/resize:fit:1358/1*l1AMsvG2A6vJhgNVprYeFQ.jpeg",
    system_support="PS4, PS5",
    user_id=6
),

Game(
    game_title="Hades",
    price=25,
    developer="Supergiant Games",
    publisher="Supergiant Games",
    about_game="Hades is an action roguelike where players control Zagreus, the son of Hades, as he attempts to escape the Underworld. Each run is unique with various weapons and abilities.",
    description="temp info for now",
    img="https://www.privatedivision.com/wp-content/uploads/2021/06/Hades_Keyart_3840x2160-scaled.jpg",
    system_support="PC, Xbox, PlayStation, Nintendo Switch",
    user_id=2
),

Game(
    game_title="Stardew Valley",
    price=15,
    developer="ConcernedApe",
    publisher="ConcernedApe",
    about_game="Stardew Valley is a farming simulation game that lets players build and manage their own farm. It offers a peaceful and charming rural life experience.",
    description="temp info for now",
    img="https://images.mein-mmo.de/medien/2020/05/Stardew-Valley-titel-1140x445-1.jpg",
    system_support="PC, Xbox, PlayStation, Nintendo Switch",
    user_id=8
),

    Game(
        game_title="Overwatch 2",
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
        user_id=4
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
        user_id=9
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
        user_id=2
    ),
    Game(
        game_title="Palworld",
        price=29.99,
        developer="Pocket Pair, Inc.",
        publisher="Pocket Pair, Inc.",
        about_game='Palworld is an action-adventure, survival, and monster-taming game created and published by Japanese developer Pocket Pair. The game is set in an open world populated with animal-like creatures called "Pals", which players can battle and capture to use for base building, traversal, and combat.',
        description="temp info for now",
        img="https://cdn.wccftech.com/wp-content/uploads/2023/06/palworld_ConceptArt_01-scaled.jpg",
        system_support="Steam and Xbox",
        user_id=4
    ),
    Game(
        game_title = "Lethal Company",
        price = 9.99,
        developer = "Zeekerss",
        publisher = "Zeekerss",
        about_game = "A co-op horror about scavenging at abandoned moons to sell scrap to the Company.",
        description = "A co-op horror about scavenging at abandoned moons to sell scrap to the Company.",
        img = "https://m.media-amazon.com/images/M/MV5BNWI5NzhjZDYtNDQ5MS00MGQ3LTk5YTgtZGUzZjU4YWQ1ZGRiXkEyXkFqcGdeQXVyMjQxNzM0MjI@._V1_.jpg",
        system_support = "PC",
        user_id = 5
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
