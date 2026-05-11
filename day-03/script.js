

// Operators - Arithmetic, Assignment, Comparison, Relational, Logical, Bitwise, Conditional, Grouping, TypeOf, instanceOf


// Arithmetic Operators:
// let x = 12;
// let y = 4;

// console.log(x + y); // 1. x + y = 16
// console.log(x - y); // 2. x - y = 8
// console.log(x * y); // 3. x * y = 48
// console.log(x / y); // 4. x / y = 3
// console.log(x ** y); // 5. x ** y = 12000
// console.log(x % y); // 6. x % y = 0
// console.log(x++); // 7. x++ = 12; x = 13;
// console.log(x--); // 8. x-- = 13; x = 12
// console.log(++x); // 9. ++x = 13; x = 13
// console.log(--x); // 10. ++x = 12; x = 12

// console.log(NaN === NaN);\


function check( n ) {
    // let message = n % 2 === 1 ? `${n} is an Odd number.` : `${n} is an Even number.`;
    let message = n >= 18 ? `As your age is ${n}, so you are elligiable for the driving license.` : `As your age is ${n}, so you are not elligiable for the driving license.`;
    
    console.log(message);
}

const salaryCheck = (salary) => {
    let annualSalary = salary * 12;
    let ctc = ((annualSalary * 0.2) + annualSalary); 
    console.log("As the salary is " + salary + ", so your CTC is " + ctc);
}

const checkTrafic = (light) => {
    let status;
    if ( light === "green" ) {
        status = "go";
    } else if ( light === "red" ) {
        status = "stop";
    } else {
        status = "stop";
    }
    let message = `As the light is ${light}, so you should ${status}.`;
    console.log(message);
}

const electricBill = ( units ) => {
    let unitPrice = 150;
    let totalPerMonth = units * unitPrice * 30;
    let totalPerYear = totalPerMonth * 12;

    console.log(`You pay ${totalPerMonth} tk per month and ${totalPerYear} tk per year. But if you pay yearly, you have to pay ${totalPerYear * 0.8} tk. So you will save ${totalPerYear - (totalPerYear * 0.8)} tk. How amezing!`);
}


const checkLeapYear = ( year ) => {
    let output = ( year % 4 === 0 && year % 100 !== 0 ) || year % 400 === 0 ? `${year} is a Leap year.` : `${year} is not a Leap year.`;
    return output;
}


let x = 346,
y = 45,
z = 220;

let max;
if ( x >= y && x >= z ) {
    max = x;
} else if ( y >= x && y >= z ) {
    max = y;
} else if ( z >= x && z >= y ) {
    max = z;
}

// console.log(`${max} is the max number`);



let count = 14;

// 101, 1010

let double = count << 1;

// console.log(double);

console.log("Day 03 practice completed.");