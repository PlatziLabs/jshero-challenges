---
title: 'Explica este código JavaScript 🤔'
createdAt: '2022-04-25T03:08:38.109Z'
answers: ['SyntaxError', 'ReferenceError', 'TypeError', 'undefined']
response: 2
explanation: '<code>name</code> no es ni hace referencia a una función, no tiene sentido intentar invocar a un <code>string</code> como si fuera una función.
No pude ser <code>SyntaxError</code> por que no se cometio ningún error de tipeo, el código no esta mal escrito pero tampoco es un código valido.
No puede ser <code>ReferenceError</code> por que no hay problemas de referencia al intentar acceder a la variable <code>name</code>.

<br /><br />

Se genera una excepción de tipo <code>TypeError</code> cuando un valor no es del tipo esperado, entonces se lanza un <code>TypeError: name is not a function</code>!'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
const name = "Lydia"

console.log(name()) 🤔?
```