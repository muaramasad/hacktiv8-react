class Person {
   constructor(name){
      this._name = name
   }
   getName(){
      return this._name
   }
}

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

let employee = new Employee("muha","Mr.")
let student = new Student("muha");

console.log(student.doStudy());
console.log(employee.getTitle());