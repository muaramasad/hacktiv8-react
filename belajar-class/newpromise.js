const newPromise = (angka1, angka2) => {
   return new Promise((resolve, reject) => {
      const hasil = angka1 * angka2;
      resolve(hasil)
   })
}

newPromise(3,2)
   .then(result => {
      console.log(result)
   })