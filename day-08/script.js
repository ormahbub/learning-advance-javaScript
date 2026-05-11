const message = "I can do it";

function sum(a, b) {
    const result = a + b;
    return result;
}

function mul(a, b) {
    const result = a * b;
    return result;
}
function calc(a, b) {
    return ( sum(a, b) + mul(a, b) ) / 2;
}

function getResult(a, b) {
    return calc(a, b);
}

const output = getResult(8, 5);

console.log(output);