---
title: 'Explica este código JavaScript 😎'
createdAt: '2022-05-18T16:15:06.873Z'
answers: ['length, 3', '8, SyntaxError', '8, 3', 'SyntaxError, SyntaxError']
response: 2
explanation: 'Tanto cadenas como arreglos son iterables, entonces podemos usar la nomenclatura de corchetes para acceder a sus valores.
<br /> <br />
Todo lo que este dentro de los corchetes será evaluado como expresión, entonces ambos casos se ejecutaran correctamente, el primero solo ejecuta el método <code>length</code> y el segundo concatena ambas cadenas para finalmente ejecutar <code>length</code> para el arreglo.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---
```javascript
const banda = "Coldplay";
const canciones = ["Yellow", "Fix You", "Trouble"];

console.log(banda["length"]);
console.log(canciones["len"+"gth"]);
```