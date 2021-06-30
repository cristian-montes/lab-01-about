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
    let name;
    let count = 0;
    if (confirmed){
        name = prompt('whats your name?');
        const ans1 = prompt('Do I like tacos?');
        const ans2 = prompt('Do I like to play soccer?');
        const ans3 = prompt('How many freckles do I have?');
        const ans4 = prompt('Do I shower at night or in the mornig?');

        

        if (isYes(ans1)){
            count ++;
        } if (isYes(ans2)){
            count ++;
        } if (eaFreckles(ans3)){
            count ++;
        } if (shower(ans4)){
            count++;
        }
      
    } if (count === 1) {
        results.textContent = `COME ON ${name} YOU ONLY GOT ${count} gucci Answers`;
    } if (count === 2) {
        results.textContent = `${name}!!! keep trying, only ${count} really???`;
    } if (count === 3) {
        results.textContent = `${name} got ${count} good ones, good job!!!`;
    } if (count === 4) {
        results.textContent = `${name} got ${count} gucci Answers, ALL OF THEM`;
    } else {
        alert('SEE YOU LATER ALLIGATOR');
    }
});