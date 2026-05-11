

// let day = "Monday";

// switch (day) {
//     case "monday":
//         console.log("It's the starting day of a week.");
//         break;
//     default:
//         console.log("It's a normal day.");
// }


const rajonWithdraw = ( amount ) => {
    if ( amount % 100 === 0 ) {
        console.log( "Withdrawal successful." );
    } else {
        console.log( "Invalid amount" );
    }
}

const calculator = ( num1, num2, operator ) => {
    switch ( operator ) {
        case "+":
            console.log( `Summation of ${num1} and ${num2} is ${num1 + num2}` );
            break;
        case "-":
            console.log( `Subtraction of ${num1} and ${num2} is ${num1 - num2}` );
            break;
        case "*":
            console.log( `Multiplication of ${num1} and ${num2} is ${num1 * num2}` );
            break;
        case "/":
            console.log( `Division of ${num1} and ${num2} is ${num1 / num2}` );
            break;
        default:
            console.log( "Invalid operator." );
    }
}



/* 
Imagine, the INOX charges ticket prices based on age:

Children (<18 years): $3
Adults (18 - 60 years): $10
Seniors (60+ years): $8
Write a program that prints the ticket price based on the person’s age.
*/


const getTicketPrice = ( age ) => {
    if ( age < 18 ) {
        console.log( `As you are children, so you have to pay $3 for the ticket.` );
    } else if ( age >= 18 && age <= 60 ) {
        console.log( `As you are yonger, so you have to pay $10` );
    } else {
        console.log( `As you are older, so you have to pay $8` );
    }
}


// Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month.
// Make it month bases, not date based. Like March and April borns are Aries,
// Aplil and May born are Taurus, and so on. Do not use if-else.

const getZodiacSign = ( birthMonth ) => {
    switch ( birthMonth ) {
        case "January":
        case "Fabruary":
            console.log( `${birthMonth} = Rashi 1` );
            break;
        case "March":
        case "April":
            console.log( `${birthMonth} = Rashi 2` );
            break;
        case "May":
        case "June":
            console.log( `${birthMonth} = Rashi 3` );
            break;
        case "July":
        case "Augoast":
            console.log( `${birthMonth} = Rashi 4` );
            break;
        case "September":
        case "October":
            console.log( `${birthMonth} = Rashi 5` );
            break;
        case "Nobember":
        case "December":
            console.log( `${birthMonth} = Rashi 6` );
            break;
        default:
            console.log( `${birthMonth} is a Invalid month name.` );
    }
}



/*
6. Which Triangle?
A triangle has 3 sides. A Triangle type is determined by its sides:

All sides equal is called, Equilateral Triangle.
Two sides equal is called, Isosceles Triangle.
All sides different is called, Scalene Triangle.
Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.
*/

const triangleType = ( side1, side2, side3 ) => {
    if ( side1 === side2 && side2 === side3 ) {
        console.log( `${side1}, ${side2} and ${side3} is a Equilateral Triangle.` );
    } else if ( side1 === side2 || side2 === side3 || side1 === side3 ) {
        console.log( `${side1}, ${side2} and ${side3} is a Isosceles Triangle.` );
    } else if ( side1 !== side2 || side2 !== side3 || side1 !== side3 ) {
        console.log( `${side1}, ${side2} and ${side3} is a Scalene Triangle.` );
    }
}


console.log("Day 04 is completed.");