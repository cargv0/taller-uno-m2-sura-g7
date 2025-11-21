let compras = ["Manzanas"];

// 1. Añadir "Leche" y "Pan" al FINAL
compras.push("Leche", "Pan");

// 2. Añadir "Huevos" al INICIO
compras.unshift("Huevos");

// 3. Eliminar "Manzanas" (segundo elemento)
compras.splice(1, 1);

console.log(compras);  // ["Huevos", "Leche", "Pan"]
