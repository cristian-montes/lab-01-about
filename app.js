// import functions and grab DOM elements
import { eaFreckles } from './utils.js';
import { isYes } from './utils.js';
import { shower } from './utils.js';
  //get the button element
  // add "click" event listener to the button
   //   confirm the user wants to start the quiz
  //    if they do -- propmpt for at least 3 questions and store the answer
  //  for each answer check if the user entered a correct value
  // track the number of correct answers
  //  at the end of the quiz, update the quiz the results section with the number of correct answers.

const quizzBtn = document.getElementById('click-me');
const results = document.getElementById('results');
  
quizzBtn.addEventListener('click', () => {
    const confirmed = confirm('Take Quiz?');
    if (confirmed){
        const name = prompt('whats your name?');
        const ans1 = prompt('Do I like tacos?');
        const ans2 = prompt('Do I like to play soccer?');
        const ans3 = prompt('How many freckles do I have?');
        const ans4 = prompt('Do I shower at night or in the mornig?');

        let count = 0;

        if (isYes(ans1)){
            count ++;
        } if (isYes(ans2)){
            count ++;
        } if (eaFreckles(ans3)){
            count ++;
        } if (shower(ans4)){
            count++;
        }
        results.textContent = `${name} got ${count} gucci`;
    } else {
        console.log('user said nah bruh');
    }
});