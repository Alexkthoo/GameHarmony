# Full Stack Project (GameHarmony)

Welcome to GameHarmony - Your Personalized Gaming Universe!

🎮 Discover. Match. Play. 🌟

At GameHarmony, we're not just another gaming platform – we're your gateway to a universe of games tailored just for you! Like a friend who knows your gaming soul, we're here to connect you with games that resonate with your unique preferences.

What Sets Us Apart?

🔍 Personalized Game Matching: Say goodbye to endless scrolling and hello to precision. Our upcoming feature, a smart questionnaire, will understand your gaming style – be it your preferred genre, playtime, or atmosphere – and match you with games that feel like they were made just for you.

🎲 A World of Games at Your Fingertips: From indie gems to blockbuster hits, GameHarmony offers an ever-expanding universe of games. Whether you're a casual gamer or a hardcore enthusiast, our diverse library has something special for everyone.

👥 Community & Connection: Join a community where your gaming passions are shared, celebrated, and connected. GameHarmony is more than a platform; it's a community of gamers, for gamers.

Coming Soon: Keep an eye out for our personalized questionnaire feature, set to revolutionize how you discover your next favorite game!

Dive into GameHarmony today and let your gaming journey begin!

**Click on the link below to visit the live site!**<br>
[![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)
](https://gameharmony.onrender.com)


**Languages Used**<br>
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
 ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
 ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
 ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
 ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
 ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
 ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
 ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
 ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

<!-- ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) -->

**Site Preview**<br>

<!-- ![Alt Text](https://cdn.discordapp.com/attachments/1110721109076221993/1195912430971260958/image.png) -->

<!-- ![Alt text](<Screen-Recording-2024-01-13-at-11.17.31 AM.gif>) -->

## What can you do on GameHarmony?

**1. Check out reviews and ratings for games helping others make informed decisions!**<br>

- Navigate through the website as either a registered or unregistered user. Create your own account or simply log in as the demo user for quick access!
- View available businesses and see what other users have to say about it

**2. What are the perks of being a registered user?**<br>

- Create your own business in Bikini Bottom
- Edit or delete your existing spots
- Other users can leave reviews on your existing spots
- Post reviews on other spots

## How to download GameHarmony on your local computer

1. In the root folder:

- create an .env file
- copy over .envexample content into the new .env file
- run these commands in terminal

  ```bash
  pipenv requirements > requirements.txt
  pipenv install
  pipenv shell
  flask db upgrade
  flask seed all
  flask run
  ```

2. cd into the root folder and then run `pipenv run flask run` to start the back-end

3. cd into the react-app folder and then run `npm start` to start the front-end

# Site Summary

## Landing Page

<!-- ![](img.png) -->

- This page generates four randomly selected games to present a brief info regarding the game itself.

## Main Page

<!-- ![All business](image.png) -->

- Click the 'View All Games' link to navigate here
- The homepage displays a comprehensive list of all available games featured on GameHarmony.
- This page is also accessible to anyone (registered and unregistered users)

## Sign Up

<!-- ![Sign up](https://cdn.discordapp.com/attachments/1110721109076221993/1196687779342594048/image.png) -->

- Unregistered users have the option to create an account through the dropdown menu located at the top-right corner
- In the event a user attempts to input invalid information, error messages will populate to guide the user to resolve them accurately
- Upon successful completion of the Sign Up form, the new user will be logged in automatically

## Log In

<!-- ![Login](https://media.discordapp.net/attachments/1110721109076221993/1196688534917099602/image.png) -->

- Existing users can access their accounts through the designated login portal through the dropdown menu located at the top-right corner
- To gain full access to Kelp quickly, simply click the "Sign In as Demo User" button. This will allow you to creating new business, managing existing businesses, and leave reviews on others' businesses

## Leave a Review

<!-- ![Leave a comment](image.png) -->

- Registered users can submit reviews provided that they have not previously submitted a review for the same spot
- Each review requires a description and Thumbs up or down button, while the inclusion of photos remains optional
- Newly submitted reviews dynamically appear on the current page
- Users may modify or delete their reviews conveniently through the business details page

## Add a Business

<!-- ![Add a Spot](https://cdn.discordapp.com/attachments/1110721109076221993/1196688537177829487/image.png) -->

- As a logged-in user, create a game on GameHarmony website.
- Each new listing requires a name, description, category, price, and image!

## Manage Business

<!-- ![Manage Spot](https://cdn.discordapp.com/attachments/1110721109076221993/1196688537702109274/image.png) -->

- User is able to update or delete the spot on the spot details page
- Each update requires a name, description, category, price, and image!
