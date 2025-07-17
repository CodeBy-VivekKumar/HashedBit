let studentsData = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

let output = {};
for (let student in studentsData) {
    let scores = Object.values(studentsData[student]);
    let avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    output[student] = { average: avg };
}
console.log(output);
