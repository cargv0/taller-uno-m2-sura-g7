let asientos = ["Ocupado", "Libre", "Libre", "Libre", "Ocupado"];

// 1. Cambiar los asientos "Libre" a "Reservado" (índices 1, 2, 3)
asientos.fill("Reservado", 1, 4);

console.log(asientos);  // ["Ocupado", "Reservado", "Reservado", "Reservado", "Ocupado"]
