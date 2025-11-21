let fila = ["Ana", "Luis", "Carlos", "Maria"];

// 1. Eliminar a "Luis" (posición 1)
fila.splice(1, 1);

// 2. Insertar a "Jorge" después de "Ana" (posición 1)
fila.splice(1, 0, "Jorge");

console.log(fila);  // ["Ana", "Jorge", "Carlos", "Maria"]
