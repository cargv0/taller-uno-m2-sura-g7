let carrito = [];

// 1. Añadir "Camisa" y "Pantalón" al FINAL
carrito.push("Camisa", "Pantalón");

// 2. Añadir "Zapatos" al INICIO
carrito.unshift("Zapatos");

// 3. Eliminar "Camisa" (posición 1)
carrito.splice(1, 1);

console.log(carrito);  // ["Zapatos", "Pantalón"]
