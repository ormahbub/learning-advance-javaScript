
let user = "Alice";

function outer() {
    function inner() {
        // console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();



function add( num ) {
    let total = 0;
    total += num;
    return total;
}

let total = add(3);
total = add(7);

// console.log(total);


function parent() {
    const name = "Mahbub";
    function child() {
        // console.log(name);
    }
    child();
}
parent();


function func() {
    for (var number = 0; number <= 5; number++ ) {
        // console.log(number);
        let some = number;
    }
    // console.log();
}
func();


function funcOne() {
    let value = 300;
    return value;
}
function funcTwo() {
    let value = funcOne();
    // console.log(value);
}

funcTwo();


// console.log(age);
// var age = 22;

function showAge() {
    let age = 22;
    // console.log(age);
}
showAge();
// console.log(age);

let msg = "Hello";

function outerFunc() {
    let msg = "Hi";

    function innerFunc() {
        // console.log(msg);
    }

    innerFunc();
}

outerFunc();


let x = "Global";

function outerFunc2() {
    let x = "Outer";

    function innerFunc2() {
        let x = "Inner";
        // console.log(x);
    }

    innerFunc2();
}

outerFunc2();


function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();