// import functions and grab DOM elements
import { eaFreckles } from './utils.js';
import { isYes } from './utils.js';
import { shower } from './utils.js';

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
      // IF STATEMENTS TO ADD STYLING FOR EVERY USER SCORE
    } if (count === 1) {
        results.classList.remove('style-ans3');
        results.classList.remove('style-ans2');
        results.classList.add('style-ans1');
        results.textContent = `COME ON ${name} YOU ONLY GOT ${count} gucci Answers`;
    } if (count === 2) {
        results.classList.remove('style-ans1');
        results.classList.remove('style-ans3');
        results.classList.add('style-ans2');
        results.textContent = `${name}!!! keep trying, only ${count} really???`;
    } if (count === 3) {
        results.classList.remove('style-ans2');
        results.classList.remove('style-ans1');
        results.classList.add('style-ans3');
        results.textContent = `${name} got ${count} good ones, good job!!!`;
    } if (count === 4) {
        results.textContent = `${name} got ${count} gucci Answers, ALL OF THEM`;
    } 
});