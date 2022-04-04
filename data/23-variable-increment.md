---
title: 'Explica este código JavaScript 🧐'
createdAt: '2022-04-04T17:25:43.270Z'
answers: ['10, 10', '10, 11', '11, 11', '11, 12']
response: 0
explanation: 'La primera función en llamarse es <code>increaseNumber</code> que solo se encarga de retornar la variable <code>num</code> y luego la incrementa; <code>num</code> no esta en el scope de la función por eso pasamos a buscar la variable en el scope global. Esta función regresará 10.

<code>num1</code> se pasa como parámetro a <code>increasePassedNumber</code> que hace lo mismo que <code>increaseNumber</code>, regresa primero el valor de la variable y luego la incrementa, por ello obtenemos nuevamente como salida el valor 10.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---

```javascript
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1); // 🤔
console.log(num2); // 🤔
```