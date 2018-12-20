const arrayOfWords = ['cucumber','tomatos', 'avocados'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (arr) => {
   return new Promise((resolve,reject) => {
      resolve(arr.map(w => {
         if(typeof w === 'string'){
            return w.charAt(0).toUpperCase()+w.slice(1)
         }
         return w
      }))
   })
}

const sortWords = (arr2) => {
   return new Promise((resolve,reject) => {
      resolve(arr2.sort())
   })
}

makeAllCaps(complicatedArray)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))