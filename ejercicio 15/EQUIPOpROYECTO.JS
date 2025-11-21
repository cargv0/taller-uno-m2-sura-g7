let equipo = ["Ana (Líder)", "Juan (Dev)", "Maria (Diseñadora)"];

// 1. Eliminar a "Juan (Dev)" (posición 1)
equipo.splice(1, 1);

// 2. Añadir "Pedro (Dev)" y "Luisa (Dev)" al FINAL
equipo.push("Pedro (Dev)", "Luisa (Dev)");

console.log(equipo);  // ["Ana (Líder)", "Maria (Diseñadora)", "Pedro (Dev)", "Luisa (Dev)"]
