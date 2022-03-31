---
title: 'Determina el resultado del siguiente código'
createdAt: '2022-03-19T04:36:49.888Z'
answers:
  [
    'undefined',
    'Uncaught ReferenceError: myNumber is not defined',
    'Uncaught ReferenceError: anotherFn is not defined',
    '8',
  ]
response: 1
explanation: '
El error es debido a un concepto que puede ser un poco confuso al empezar en JavaScript: Hoisting.
<br/><br/>
<b>Hoisting</b> es una técnica de desplazamiento de declaraciones de variables y funciones. Cuando se declara una variable o una función, el código es desplazado hacia arriba, lo que significa que la variable o función puede ser utilizada antes de que se haya declarado.
<br/><br/>
El concepto de Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript
<br/><br/>
Conceptualmente, por ejemplo, una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código. (<a href="https://developer.mozilla.org/es/docs/Glossary/Hoisting" target="_blank">mdn</a>)'
author: 'gndx'
course: 'Curso de Manipulación de Arrays en JavaScript'
reference: 'https://platzi.com/clases/2461-arrays/40878-hoisting/'
level: 'basic'
---

```javascript
anotherFn();

function anotherFn() {
  console.log(myNumber + myNumber);
}

let myNumber = 4;
```
