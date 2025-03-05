function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var numerosPares = []
  array.forEach((num) => {
    if (num % 2 === 0) {
      return numerosPares.push(num);
    }
      
})
  
  return numerosPares;
}

console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6]));


module.exports = filtrarNumerosPares;
