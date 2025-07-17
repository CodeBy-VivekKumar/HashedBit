const person = {
  name: "Vivek",
  age: 22,
  occupation: "Student"
};

function greetPerson(p) {
  console.log(`Hello, my name is ${p.name}, I am ${p.age} years old and work as a ${p.occupation}.`);
}

greetPerson(person);
// Output: Hello, my name is Vivek, I am 22 years old and work as a Student.
