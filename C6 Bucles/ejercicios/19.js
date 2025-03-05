function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:

  var suma = 1;

  if(n === 0) {
    return 0;
  }

  if(n === suma) {
    return suma;
  }
  
  for (let i = 2; i <= n; i++) {
      suma += i;
  } 
  return suma;
}

console.log(sumarHastaN(4));


module.exports = sumarHastaN;
