// IMPORT MODULES under test here:
import { isYes } from '../utils.js';
import { eaFreckles } from '../utils.js';
import { shower } from '../utils.js';

const test = QUnit.test;

test('Test the isYes Function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const yesAnswer = 'yes';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = isYes(yesAnswer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('Test the isYes freckles function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const yesAnswer = 'a lot';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = eaFreckles(yesAnswer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Test the isYes freckles function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const yesAnswer = 'night';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = shower(yesAnswer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

