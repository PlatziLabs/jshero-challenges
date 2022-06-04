---
title: 'Explica este código JavaScript'
createdAt: '2022-06-04T18:00:46.433Z'
answers: [
    'SyntaxError: unexpected token: keyword 'for'', 
    'Es un bucle', 
    'ReferenceError', 
    'Ninguna de las anteriores'
    ]
response: 1
explanation: 'Dentro de un objeto literal es posible usar nombres de palabras reservadas del lenguaje como nombres de keys, esto es perfectamente valido.
<br/><br/>
❌ Pese a que es valido, se recomienda no hacer esto y respetar las palabras reservadas de javascript. ¡No hagas nunca esto! Solo se conciente que es posible.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
const test = {
  if:"Es un condicional",
  let: "Es una manera de declarar variables",
  for: "Es un bucle",
};
console.log(test.for); //??
```