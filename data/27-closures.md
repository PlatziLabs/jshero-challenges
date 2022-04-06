---
title: '¿Qué devuelve el siguiente código?'
createdAt: '2022-04-06T15:59:39.743Z'
answers: ['NaN', 'ReferenceError: x is not defined', '30', 'ReferenceError: y is not defined']
response: 2
explanation: '
  Aquí tenemos el escenario de un <strong>closure</strong>, un closure es:
  - Una función que puede recibir un dato y lo almacena en su scope
  - Retorna una función que ocupa ese dato previamente guardado

  En este caso estamos haciendo una "fábrica" de multiplicadores.
  ```javascript
  // five es una función que tiene guardada en su scope la variable x con el valor de 5
  const five = makeMulti(5);
  // Ahora podemos pasarle a la función five cualquier valor que queramos multiplicar por 5
  const rta = five(6);

  // Podemos hacer más funciones multiplicadoras como:
  const seven = makeMulti(7);
  const two = makeMulti(2);
  ```
'
author: 'Armando101'
course: 'Curso de Closures y Scope en JavaScript'
reference: 'https://platzi.com/cursos/scope/'
level: 'intermediate'
---

```javascript
function makeMulti(x) {
  return y =>  x * y;
}

const five = makeMulti(5);
const rta = five(6);
console.log(rta);
```