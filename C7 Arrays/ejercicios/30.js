function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:


  for (var i=0; i<= numeros.length; i++) {
        for (var j= i+1; j<= numeros.length - 1; j++) {

        if(numeros[i] === numeros[j]) {
         
          return numeros[i];
        } 
    }
    }
  
  return undefined;
}

console.log(encontrarElementoRepetido([1, 2, 3, 4, 5, 5]));


module.exports = encontrarElementoRepetido;