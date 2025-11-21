let palabras = ["uno", "dos", "cuatro"];

// 1. Invertir el orden
palabras.reverse();

// 2. Reemplazar "cuatro" (ahora en posición 0) por "tres"
palabras.splice(0, 1, "tres");

console.log(palabras);  // ["tres", "dos", "uno"]
