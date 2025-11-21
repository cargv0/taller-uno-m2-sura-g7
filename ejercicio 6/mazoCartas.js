let mazo = ["As", "Rey", "Reina", "Jota"];

// 1. Barajar el mazo (invertir el orden)
mazo.reverse();

// 2. Sacar la carta de arriba (el primer elemento)
mazo.shift();

console.log(mazo);  // ["Jota", "Reina", "Rey"]
