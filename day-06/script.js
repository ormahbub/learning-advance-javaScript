
function celsiusToFahrenheit( celsiusValue ) {
    const result = ( celsiusValue * ( ( 212 - 32 ) / 100 ) ) + 32;
    console.log(`${celsiusValue} Degree Celsius is equal ${result} Fahrenheit.`);
}
// celsiusToFahrenheit( 0 );

function findMax( num1, num2, num3, ...rest ) {
    return Math.max(num1, num2, num3, ...rest);
}
// console.log( findMax( -266, -53, -32, -43, -553, -322, -33, -4534, 3, -995 ) );

function isPalindrome( str ) {
    const output = str === str.split("").reverse().join("") ? `Yes, "${str}" and "${str.split("").reverse().join("")}" are same thing.` : `No, "${str}" and "${str.split("").reverse().join("")}" is not same thing.`;
    return output;
}
// console.log( isPalindrome( "kew" ) );

function makeFactorial( n ) {
    let result = 1;
    for ( let x = n; x > 0; x-- ) {
        if ( x === 0 ) {
            result = result;
        } else {
            result *= x;
        }
    }
    return result;
}
// console.log(makeFactorial( 3 ));

function countVowel( str ) {
    let count = 0;
    str.split("").map(strItem => {
        switch ( strItem ) {
            case "a":
                count++;
                break;
            case "e":
                count++;
                break;
            case "i":
                count++;
                break;
            case "o":
                count++;
                break;
            case "u":
                count++;
                break;
            default:
                count = count;
        }
    })
    return count;
}
// console.log(countVowel( "aeiou" ));

// const makeFirstUp = ( sentence ) => sentence.split( " " ).map( ( item ) => item.replace(item[0], item[0].toUpperCase())).join(" ");
// console.log(makeFirstUp( "This is a text." ));

function firstCharToUpper( sentence ) {
    return sentence.split(" ").map( ( item ) => {
        return item.replace(item[0], item[0].toUpperCase());
    } ).join(" ");
}
// console.log(firstCharToUpper( "I have to become a highly skilled Software Engineer" ));

// (function( name ) {
//     console.log("Hello, " + name + "!");
// })("Mahbub");


function showMsg( name, messageFunc ) {
    messageFunc(name);
}
showMsg("Mahbub", function( name ) {
    const text = "Hello, " + name + "!";
    // console.log( text );
});