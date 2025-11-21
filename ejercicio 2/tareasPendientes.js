let tareas = ["Revisar emails"];

// 1. "Llamar al cliente" encima de la pila
tareas.unshift("Llamar al cliente");

// 2. "Preparar reporte" encima de la pila
tareas.unshift("Preparar reporte");

// 3. Completaste "Preparar reporte"
tareas.shift();

// 4. Completaste "Llamar al cliente"
tareas.shift();

console.log(tareas);  // ["Revisar emails"]
