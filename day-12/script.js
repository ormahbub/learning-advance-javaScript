// const user = { name: "Mahbub", age: undefined };
// const user = { name: "Mahbub", age: null };
// const user = { name: "Mahbub", age: 32 };

// console.log(user.name, user.age ?? "Don't know the age.");

// const obj = Object.freeze({ a: 11 });
// obj.a = 22;

// console.log(obj.a);

const person = {
  name: "Mahbub",
  company: {
    name: "Tech Maximus",
    location: {
      city: "Dhaka",
      zip: "1205",
    },
  },
};

const {
  name,
  company: {
    name: companyName,
    location: { city },
  },
} = person;

// console.log(`My name is ${name}. I work at ${companyName} which is in ${city}.`);

// Student avarage grade calculator

const students = [
  { name: "Raju", age: 21, grade: 3.94 },
  { name: "Shakib", age: 24, grade: 3.14 },
  { name: "Rakib", age: 19, grade: 2.84 },
];

function gradeCalculator(arr) {
  let total = 0;
  let count = 0;
  arr.map(function (item) {
    const { grade } = item;
    total += grade;
    count++;
  });

  // console.log(`The avarage grade is ${(total / count).toFixed(2)}`);
}

gradeCalculator(students);

// Books store management
// Books store management
// Books store management

const books = [
  { name: "Zero to One", wirter: "Peter Thiel", stockCount = 22 },
  {name: "Atomic Habits", writer: "James Clear", stockCount: 30},
  {name: "Easy Physics", writer: "Someone", stockCount: 0}
];

