
// let str = "";

// for ( let i = 1; i <= 10; i++ ) {
//     str += "* ";
//     // console.log(str);
// }


// let str2 = "";

// for ( let x = 1; x <= 5; x++ ) {
//     str2 += "* ";
//     // console.log(str2);
// }

// for ( let num = 1; num <= 10; num++ ) {
//     // console.log(`3 X ${num} = ${3 * num}`);
// }

// let sum = 0;
// for ( let num = 1; num <= 500; num++ ) {
//     num % 2 !== 0 ? sum += num : sum = sum;
// }
// console.log(sum);

for ( let x = 1; x <= 20; x++ ) {
    if ( x % 3 === 0 ) continue;
    // console.log(x);
}

let x = 6789;
// console.log(x.toString().split("").reverse().join(""));



let num = 345672;
let revNum = 0;

while ( num !== 0) {
    let lastNum = num % 10;
    revNum = ( revNum * 10 ) + lastNum;
    num = Math.floor( num / 10 );
}

console.log(revNum);


// When we know how many times we want to run a code, then we should use 'for' loop.
// When we don't know how many times we will run a code, then we should use 'while' loop.
// When we want the code should run at least once, then we should use 'do while' loop.