const {Employee,Student} = require('./ClassEmployee.js');

const employee = new Employee("Muha","Mr.");
console.log(employee.getTitle());

const student = new Student("Student 1");
console.log(student.doStudy());