function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  
  var upperCaseModifiedArray = array.map((string) => {
    return string.toUpperCase();    
  })
  
  return upperCaseModifiedArray;
}

console.log(convertirStringAMayusculas(['hello', 'goodbye']));


module.exports = convertirStringAMayusculas;
