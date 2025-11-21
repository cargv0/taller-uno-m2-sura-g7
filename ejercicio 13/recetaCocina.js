let receta = ["Paso 2: Mezclar ingredientes", "Paso 3: Hornear"];

// 1. Añadir "Paso 1: Pre-calentar horno" al INICIO
receta.unshift("Paso 1: Pre-calentar horno");

// 2. Añadir "Paso 4: Servir" al FINAL
receta.push("Paso 4: Servir");

console.log(receta);  // ["Paso 1: Pre-calentar horno", "Paso 2: Mezclar ingredientes", "Paso 3: Hornear", "Paso 4: Servir"]
