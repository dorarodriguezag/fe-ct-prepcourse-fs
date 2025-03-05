function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var askedMonths = []
  array.forEach((month) => {
    if (month === 'Enero' || month === 'Marzo' || month === 'Noviembre' ) {
      return askedMonths.push(month);
    }
      
})
  
  if (askedMonths.length === 3) {
    return askedMonths;  
  }
  return "No se encontraron los meses pedidos";
} 

module.exports = mesesDelAño;
