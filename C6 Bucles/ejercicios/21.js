function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  let number = numero;

  if (number <= 0) {
    return false;
  }

  while(number % 2 === 0) {
    number = number/2
  }

  return number === 1;
}

module.exports = esPotenciaDeDos;
