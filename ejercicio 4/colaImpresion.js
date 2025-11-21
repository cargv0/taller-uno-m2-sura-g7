let colaImpresion = ["doc1.pdf", "doc2.png", "doc3.jpg"];

// 1. Imprimir el primer documento (eliminar el primero)
colaImpresion.shift();

// 2. Añadir "doc4.txt" al FINAL
colaImpresion.push("doc4.txt");

// 3. Imprimir el siguiente documento (eliminar el primero)
colaImpresion.shift();

console.log(colaImpresion);  // ["doc3.jpg", "doc4.txt"]
