function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var sumOfElementsOfAnArray = 0;
  var average;
  for (var i=0; i<resultadosTest.length; i++) {
        sumOfElementsOfAnArray += resultadosTest[i];
        average = sumOfElementsOfAnArray/resultadosTest.length
    }
      
  return average;
}

module.exports = promedioResultadosTest;
