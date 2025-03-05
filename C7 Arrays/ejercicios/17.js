function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var sumOfElementsOfAnArray = 0;
  for (var i=0; i<arrayOfNums.length; i++) {
        sumOfElementsOfAnArray += arrayOfNums[i];
    }
      
  return sumOfElementsOfAnArray;
}

module.exports = agregarNumeros;
