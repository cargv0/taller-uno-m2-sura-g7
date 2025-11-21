let invitados = ["Carlos", "Beatriz", "David", "Ana"];

// 1. Ordenar alfabéticamente
invitados.sort();

// 2. Eliminar a "Beatriz" (posición 1)
invitados.splice(1, 1);

console.log(invitados);  // ["Ana", "Carlos", "David"]
