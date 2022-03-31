---
title: '¿Qué imprime este código JavaScript?'
createdAt: '2022-03-23T04:16:40.302Z'
answers: ['number', 'array', 'object', 'NaN']
response: 2
explanation: 'Cuando usamos la sintaxis de ... en los parámetros de una función (ES6: Rest Operator) convertimos a dicho parámetro a un arreglo.
<br/><br/>
Entonces es tentador marcar la opción B: "array" pero esto sería un error de novato. En JavaScript no existe el tipo de dato array, para tipos no primitivos el lenguaje los evalua como object. Por ese motivo la respuesta correcta es la opción C: "object".'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'medium'
---

```javascript
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```
