class Animal {
   constructor(name,numOfFeed){
      this.name = name
      this.numOfFeed = numOfFeed
   }
   getName(){
      return this.name
   }
   getNumOfFeed(){
      return this.numOfFeed
   }
}

class Cat extends Animal {
   doMeong(){
      return "meeooongg...";
   }
}

class Tiger extends Animal {
   constructor(name,numOfFeed,skinColor){
      super(name,numOfFeed)
      this.skinColor = skinColor
   }
   getSkinColor(){
      return this.skinColor;
   }
}

let cat = new Cat("Tom",4);
let tiger = new Tiger("Tigres",4,"Loreng");

console.log(cat.doMeong());
console.log(tiger.getSkinColor());