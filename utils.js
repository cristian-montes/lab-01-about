
// GENERAL YES FUNCTION
export function isYes(word){
    word = word.toLowerCase();
    if (word === 'yes'){
        return true;
    } else {
        return false;
    }
}

// AMOUNT OF FRECKLES FUNCTION 
export function eaFreckles(word){
    word = word.toLowerCase();
    if (word === 'a lot'){
        return true;
    } else {
        return false;
    }
}


// NIGHT OR MORNING SHOWER FUCNTION
export function shower(word){
    word = word.toLowerCase();
    if (word === 'night'){
        return true;
    } else {
        return false;
    }
}

