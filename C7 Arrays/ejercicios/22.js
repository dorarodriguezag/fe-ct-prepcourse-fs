function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var arrayMultiplos = [];
  var tablaMultiplo = 6;
  for (var i=0; i <= 10; i++) {
        arrayMultiplos.push(tablaMultiplo * i);
    }
  return arrayMultiplos;
}

module.exports = tablaDelSeis;
