---
title: 'Explica este código JavaScript'
createdAt: '2022-05-30T17:26:13.973Z'
answers: ['Camila, Rodriguez, 25', 'Camila, undefined, undefined', 'ReferenceError', 'undefined, Rodriguez, 25']
response: 0 
explanation: 'Independientemente de la palabra reservada con la que declaremos una variable (<code>var</code>, <code>let</code>, <code>const</code>), esta tendrá scope global siempre y cuando no este dentro de un bloque o dentro de una función.
Por este motivo <code>nombre</code>, <code>apellido</code> y <code>edad</code> son variables de scope global y por ello pueden ser accedidas desde la función <code>getDatosPersonales</code>'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---

```javascript
var nombre = "Camila";
let apellido = "Rodriguez";
const edad = 25;

const getDatosPersonales = () => {
  console.log(nombre);
  console.log(apellido);
  console.log(edad);
};

console.log(getDatosPersonales());
```
