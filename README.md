# Web Development Project 3 - *Flag Cards v2*

Submitted by: **Anubhav Dhungana**

This web app is **A flashcard app that tests users' knowledge of world flags through an interactive card deck with input validation**

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  -  Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cardss**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

The following **optional** features are implemented:
- [x] Users can use a shuffle button to randomize the order of the cards
  - Cards should remain in the same sequence (**NOT** randomized) unless the shuffle button is clicked 
  - Cards should change to a random sequence once the shuffle button is clicked
- [x] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - Answers are considered correct even if they only partially match the answer on the card 
  - Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer
- [x] A counter displays the user’s current streak
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly



## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='src/assets/week3projectwalkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ...  
Mac Screen Record
Giphy

## Notes

The following are some of the challenges I faced while doing this work:
- React is still tricky and complicated.
- CSS is always a massive pain, with multiple iterations for the same thing. 
- Learning the full extent of React useState.
- Implementing the feature to clear the search field once proceeded to another card. 
- Implementing the feature for the arrow keys to grey out if the card shown is the first/last card in the deck. 


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
