let codigos = ["A-10", "C-30", "B-20", "D-40"];

// 1. Ordenar los códigos alfabéticamente
codigos.sort();

// 2. Eliminar el código "C-30" (ahora en posición 2)
codigos.splice(2, 1);

// 3. Añadir un código de emergencia "X-99" al INICIO
codigos.unshift("X-99");

// 4. Invertir el orden de la lista final
codigos.reverse();

console.log(codigos);  // ["X-99", "D-40", "B-20", "A-10"]
