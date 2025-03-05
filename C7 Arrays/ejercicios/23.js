function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  var result = num;
  var count = 0;
  var array = [];

  do { 
    count++;
    result = result + 2;
    array.push(result);
    if (result === count) {
      break;
    }
  } while (result !== num + 20);
  
  if (result === count) {
      return "Se interrumpió la ejecución";
    }
  return array;
}


module.exports = breakStatement;
