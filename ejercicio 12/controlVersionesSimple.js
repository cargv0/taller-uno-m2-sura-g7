let commits = ["v1.0", "v1.1"];

// 1. Hacer un nuevo guardado: "v1.2"
commits.push("v1.2");

// 2. Eliminar el último commit ("v1.2")
commits.pop();

// 3. Hacer un nuevo guardado corregido: "v1.2-corregido"
commits.push("v1.2-corregido");

console.log(commits);  // ["v1.0", "v1.1", "v1.2-corregido"]
