let historial = ["google.com", "youtube.com", "facebook.com"];

// 1. Eliminar el último elemento (deshacer última acción)
historial.pop();

// 2. Eliminar la acción anterior
historial.pop();

console.log(historial);  // ["google.com"]
