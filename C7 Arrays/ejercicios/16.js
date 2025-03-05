function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  var newArray = [];
  for (var i=0; i<array.length; i++) {
    
        newElement = array[i] * i;
        newArray.push(newElement);
    }
      
  return newArray;
}

module.exports = multiplicarElementosPorIndice;
