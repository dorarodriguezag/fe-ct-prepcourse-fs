function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  if (array.length === 0) {
    return [];
  }
  var duplicados = array.map((num) => {
    return num * 2;    
  })
  
  return duplicados;
}

console.log(duplicarElementos([1,2,3,4]));


module.exports = duplicarElementos;
