function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var stringReversed = texto.split('').reverse().join('');
  return stringReversed;
}

module.exports = invertirTexto;
