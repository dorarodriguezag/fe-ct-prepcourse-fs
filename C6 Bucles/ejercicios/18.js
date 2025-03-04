function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  let producto = 1;  

  if (a === 0 || b === 0) {
    return 0;
  }
  
  if (a === b) {
    return a;  
  }

  if (a < b) {
    for (let i = a; i <= b; i++) {
      producto *= i;
      if (Object.is(producto, -0)) {
        producto = 0;
      }
  } 
  }
  else {
    for (let i = b; i <= a; i++) {
      producto *= i;
    }
  }
  
  
  return producto;

  }



console.log(productoEntreNúmeros(-5, 5));

module.exports = productoEntreNúmeros;