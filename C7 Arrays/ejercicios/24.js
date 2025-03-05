function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  var result = num;
  var count = 0;
  var array = [];

  do { 
    count++;
    result = result + 2;
    if (count !== 5) {
      array.push(result);
    } else {
      continue;
    }

  } while (result !== num + 20);
  
  return array;
}

console.log(continueStatement(50));


module.exports = continueStatement;
