
function outer() {
    let count = 0;

    return function inner() {
        count++;
        // console.log("The number is", count);
    }
}

const countPlus = outer();

countPlus();
countPlus();
countPlus();


function testClouser() {
    let value = 10;

    return function multiplyValue() {
        return value * value;
    }
}

// console.log(testClouser()());


// function buttonClick() {
//     let clickCount = 0;

//     return document.querySelector(".btn").addEventListener("click", function () {
//         clickCount++;
//         // console.log("Button has clicked", clickCount, clickCount === 1 ? "time." : "times.");
//     });
// }

// buttonClick();




function createMultiplier(  ) {
    let number = 5;

    return function ( multiplier ) {
        // console.log("Result of", number, "*", multiplier, "=", number * multiplier);
    }
}

let multiply = createMultiplier();
multiply(4);
multiply(10);
multiply(40);
multiply(14);




function counterStep() {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log("The number is", count);
        },
        reset: function () {
            count = 0;
            console.log("The number is", count);
        },
        decrement: function () {
            count--;
            console.log("The number is", count);
        },
    }
}

let modifyValue = counterStep();

function clickBtn ( className ) {
    document.querySelector(`.${className}`).addEventListener("click", function() {
        if ( className === "increment" ) {
            modifyValue.increment();
        } else if ( className === "reset" ) {
            modifyValue.reset();
        } else if ( className === "decrement" ) {
            modifyValue.decrement();
        }
    })
}

clickBtn("increment");
clickBtn("reset");
clickBtn("decrement");


