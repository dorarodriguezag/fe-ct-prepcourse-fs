function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var count = 0
  array.forEach((num) => {
    if (num > 10) {
      return count++;
    }
      
})
  return count;
}

module.exports = contarElementosMayoresA10;
