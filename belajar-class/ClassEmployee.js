const Person = require("./ClassPerson.js");

class Employee extends Person {
   constructor(name,title){
      super(name)
      this.title = title
   }
   doWork(){
      return this._name + ' is working'
   }
   getTitle(){
      return this.title + ' ' + this._name
   }
}

class Student extends Person {
   doStudy(){
      return this._name + ' is studying'
   }
}

module.exports = {
   Employee: Employee,
   Student: Student
};