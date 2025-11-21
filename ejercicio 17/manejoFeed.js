let feed = ["Foto de Ana", "Video de Juan", "Noticia de Empresa"];

// 1. Añadir "Alerta de Sistema" al INICIO
feed.unshift("Alerta de Sistema");

// 2. Eliminar "Noticia de Empresa" del FINAL
feed.pop();

console.log(feed);  // ["Alerta de Sistema", "Foto de Ana", "Video de Juan"]

