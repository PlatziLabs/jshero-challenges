---
title: 'Explica este c贸digo JavaScript 馃'
createdAt: '2022-04-25T03:08:38.109Z'
answers: ['SyntaxError', 'ReferenceError', 'TypeError', 'undefined']
response: 2
explanation: '<code>name</code> no es ni hace referencia a una funci贸n, no tiene sentido intentar invocar a un <code>string</code> como si fuera una funci贸n.
No pude ser <code>SyntaxError</code> por que no se cometio ning煤n error de tipeo, el c贸digo no esta mal escrito pero tampoco es un c贸digo valido.
No puede ser <code>ReferenceError</code> por que no hay problemas de referencia al intentar acceder a la variable <code>name</code>.

<br /><br />

Se genera una excepci贸n de tipo <code>TypeError</code> cuando un valor no es del tipo esperado, entonces se lanza un <code>TypeError: name is not a function</code>!'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
const name = "Lydia"

console.log(name()) 馃?
```