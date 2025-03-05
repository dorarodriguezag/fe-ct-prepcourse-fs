function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   const result = arrayOfStrings.filter((string) => string.charAt(0) === 'a')
   return result;
}



module.exports = filter;
