# Web Development Project 2 - *Flag Cards*

Submitted by: **Anubhav Dhungana**

This web app: ** Flag Cards is an interactive flash card app that helps you learn to identify country flags. Test your knowledge with 15 European countries across three difficulty levels. Simply click on a card to flip it and reveal the country name. Use the navigation buttons to move between cards. Perfect for geography enthusiasts and students looking to improve their flag recognition skills! **

Time spent: **7.5** hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Some or all cards have images in place of or in addition to text
- [x] Cards have different visual styles such as color based on their category
  - A ring of green, yellow or red around the card depending on the difficulty which correspponds to general perceptions on the recognizability of the flags. 

The following **additional** features are implemented:

* [x] Every shown card is saved in a stack and can be viewed by going backwards stopping when user runs out of previous cards.
* [x] The flag is also shown in the background, with opacity turned down, when filling to the answer side. This makes it aesthetically pleasing and easier to keep track of info. 


## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='./src/assets/walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />


GIF created with ...  
MacOS Screen Recording Tool

## Notes

* Using more React features was fun yet challenging
* CSS was painful as always, especially trying to ensure aesthetic symmetry in cards, buttons, flag displays, etc. 
* The logic surrounding card flipping(showing question and answer), and setting colors was tricky, and reuiqred multiple iterations to get right.


## License

    Copyright [2025] [Anubhav Dhungana]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
