# snake
Old school snake

# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | 
|---|---| 
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Stylying / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description

My game is a build of the popular old-school cell phone game Snake. The goal is to guide your snake with the arrow keys on your keyboard to eat as many apples (red pixel) as possible. With each apple you eat, your snake will grow in length. Be careful though because eating your own body will cause you to lose a life and with hard edges mode enabled, colliding with the edges of the board will cause you to lose a life.

Players will be given the option to select a game speed, make the borders hard edges or wrapping edges, or change the style of the food you eat.

## Wireframes

https://drive.google.com/file/d/1wXoG2gSRznFstLkKeT862MvHl7I7NRY3/view?usp=sharing

## Priority Matrix
Important & Urgent
-Convert from vanilla JS to JQuery
-Landing page
-User name input page
-the error in my game
-ending screen

Important & Not Urgent
-responsive design for smartphones
-highscore list
-pics of food

Not Urgent & Not Important
-Option screen

https://drive.google.com/file/d/1Ul4ZT6eozSzQZzjmhDuVb-GwcJdyAML4/view?usp=sharing

## Game Components

### Landing Page
When a player loads the html file, they will see the title of the game, a new game button, an options button, and a highscores list.

### Game Initialization
When the game begins, the player will see a black box with a green pixel in the center of the screen and a red pixel that is randomly placed 

### Playing The Game
The user will be expected to use the arrow keys on their keyboard to guide the snake to each randomly placed apple without touching the edges or touch a part of the snake. Either touching the snake body or the colliding with the edge of the board will cause the player to lose a life.

### Winning The Game
This game has no winning condition. The goal is simply to eat as many apples as possible before inevitably eating your own body or accidentally moving off the board.

### Game Reset
When the user runs out of life, the user will be given their score and a 'Home Screen' button which will send users back to the landing page.

## MVP 
-a highscore board
-a name input screen so the highscore board can show your name
-changing the red food pixel to a small image of real foods
-a smartphone friendly format complete with on-screen arrow keys

## POST MVP
An options screen that allos users to...
-change game speed
-change the edges from hard edges to wrapping edges
-change the red food pixels to pics of real foods

Include the full list of features that you are considering for POST MVP
## Functional Components

<!-- Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method.  -->

Function createBoard will create the grid of divs and label them properly with the correct ids and classes.

Function keyPress will take the arrow key inputs and use them to change the x and y velocities of the snake head.

Function snake will update the position of the head of the snake with the velocity values based on the arrow key inputs. With the new position of the head, the function will check to see if the head is sitting on an edge or not and if the head is in the same position as an apple or not. If an edge is touched, die. If an apple is eaten, increase the length of the tail, remove the apple class from that div, and generate a new apple. The function will also keep track of past positions of the snake head and store those positions in an array and labels those divs as a snake class. Finally, if the snake head is on the same position as a part of its tail, the snake will die and restart.

Function reset will cause the tail array to become an empty array, reposition the head of the snake to the center of the board, bring x and y velocities to 0, max length of the tail to the default value, and removes the snake and its tail from the board by removing class snake from all divs.

Function game will generate the first apple and call function snake

For each death scenario, the lives left counter will be subtracted from and once the lives left reaches 0, the game

<!-- Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted.  -->

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Convert to JQuery | H | 2hr | 1hr |
| Landing Page | H | 1hr |  |
| Username Page | H | .5hr |  |
| the "blinking" error | H | 1hr |  |
| Ending Screen | H | 1hr |  |
| Cellphone screens | H | 1hr |  |
| Highscore List | H | 1hr |  |
| Pics of Food | H | 1.5hr |  |
| Option Screen | L | 1hr |  |
| Total |  | 10hrs |  |








## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
