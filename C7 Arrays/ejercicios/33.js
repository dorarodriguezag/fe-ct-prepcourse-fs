function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  const strings = [str1, str2, str3].filter(str => str !== "");

  let result = "";

  const maxLength = Math.max(...strings.map(str => str.length));

  for (let i = 0; i < maxLength; i++) {
    for (let str of strings) {
      if (str[i] !== undefined) {
        result += str[i];
      }
    }
  }
  return result;
}





// const maxLength = Math.max(...strings.map(str => str.length));
// console.log(combine('abc', '', '123'));





module.exports = combine;