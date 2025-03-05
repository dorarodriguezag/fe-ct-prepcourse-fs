function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
   var answer;
   for(var i = 0; i < array.length; i++) {
    
    if (array[i].length > 4) {
     
      answer = array[i];
      break;
    } else {  
      answer = undefined;
      break;
    }
  }
  return answer;
}


module.exports = obtenerPrimerStringLargo;
