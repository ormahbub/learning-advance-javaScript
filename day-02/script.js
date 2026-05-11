let name = "Shakib";
const age = 20;
let isStudent = true;
let favLang = "JavaScript";

// age = 19;

console.log(`${name} is ${isStudent ? "a student" : "not a student"}. And he is ${age} years old and he loved a programming language which is ${favLang}.`);


const obj = {
    name: "Raju",
    age: 19,
    gender: "Male",
    marrige: false
}

const displayText = (obj) => {
    const {name, age} = obj;
    console.log(name + " is " + age + " years old.");
}
displayText(obj);

const students = ["Shakib", "Raju", "Tamim", "Akash"];

const displayName = ( arr ) => {
    arr.map((student) => {
        console.log(student + " is a student.");
    })
}
displayName( students );