---
title: 'Explica este código JavaScript 😎'
createdAt: '2022-04-18T16:34:09.670Z'
answers: ['NaN', '20', 'ReferenceError', 'undefined']
response: 1
explanation: 'Desde ES6 es posible usar parámetros por defecto (siempre y cuando sean los últimos declarados en la función).

En este caso el parámetro por defecto <code>num1</code> es el mismo que el primer parámetro, no hay ningun problema simpre y cuando este declarado al final de la lista de parámetros de la función.

Pasamos el argumento <code>10</code> a la función <code>sum</code>, esto significa que <code>num2</code> deberá usar su valor por defecto que seria el mismo de <code>num1</code>, osea <code>10</code>; entonces <code>10 + 10</code> nos da el resultado final <code>20</code>.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
function sum(num1, num2 = num1) {
  console.log(num1 + num2)
}
sum(10); //🤔?
```