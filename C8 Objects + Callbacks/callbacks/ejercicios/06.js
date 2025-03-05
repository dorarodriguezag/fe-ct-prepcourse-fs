function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  
  var otherArray = [];
  for (let number of array) {
      var result = cb(number);
      otherArray.push(result);
   }
   return otherArray;
}

module.exports = map;
