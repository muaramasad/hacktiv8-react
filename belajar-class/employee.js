class Employee{
   constructor(name){
      this._name = name
   }

   doWork(){
      return "completed";
   }

   getName(){
      return this._name;
   }
}

let muha = new Employee("muha");
let doSomeWork = muha.doWork();
let name = muha.getName();

console.log(name);