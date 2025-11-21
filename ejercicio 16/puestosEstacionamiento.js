let parking = ["CarroA", "Libre", "Libre", "CarroB"];

// 1. Eliminar "CarroA" (posición 0)
parking.shift();

// 2. Reemplazar los dos "Libres" con "MotoA" y "MotoB"
parking.splice(0, 2, "MotoA", "MotoB");

console.log(parking);  // ["MotoA", "MotoB", "CarroB"]
