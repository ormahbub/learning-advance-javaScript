
let matched = false;
let tryCount = 0;
function guessingGame( userInput ) {
    let userValue = parseInt(userInput);
    const randomNum = Math.floor(( Math.random() * 10 ) + 1);
    tryCount++;
    if ( randomNum === userValue ) {
        console.log(`${ tryCount === 1 ? "Wow! trying just once" : `Trying after ${tryCount} times`}, you have guessed the correct number which is ${userValue}. Great!`);
        matched = true;
    } else if ( randomNum !== userValue ) {
        console.log(`Ah! You have guessed the number ${userValue}, but the correct number was ${randomNum}. You have tried ${ tryCount === 1 ? "just once" : `${tryCount} times`}.`);
        matched = false;
    }
    return matched;
}

do {
    let againInput = prompt("Guess a number again between 1 to 10.");
    guessingGame(againInput);
} while ( !matched );
