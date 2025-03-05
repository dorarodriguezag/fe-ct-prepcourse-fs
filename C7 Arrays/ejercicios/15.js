function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var biggerNumber = array[0];
  var indice = 0
  for (var i=1; i<array.length; i++) {
    if (array[i] > biggerNumber) {
      // console.log(biggerNumber);
      
        biggerNumber = array[i];
        indice = i;
    }
  }
  return indice;
}

console.log(encontrarIndiceMayor([10,20,50,80,-12]));



module.exports = encontrarIndiceMayor;
