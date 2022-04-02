---
title: 'Explica este código JavaScript 😎'
createdAt: '2022-04-02T18:47:07.447Z'
answers: ['60, 40', 'undefined, 10', '50, 10', 'null, 40']
response: 0
explanation: 'Las variables declaradas con let y const tienen un contexto de bloque, esto significa que solo podrán ser accedidas dentro del bloque de llaves donde fueron declaradas, por ejemplo dentro de un bloque if o dentro de una función.

<br /><br />

Esta premisa se cumple siempre y cuando esten declaradas dentro de un bloque, si una variable esta fuera de todo bloque entonces se dice que es una variable global y por ende puede ser accedida desde cualquier parte del código.

<br /><br />

let x = 10 es una variable global, puesto que no esta encerrada en ningún tipo de bloque.

<br /><br />

Dentro del if` 

<br /><br />

<code>
    console.log(x + y + z);
</code>

<br /><br />

En el bloque del if no se tiene acceso a ninguna variable x, por lo tanto javascript subirá al siguiente contexto para buscar una variable x, al encontrarla recien realiza la suma x + y + z que sería 60.

<br /><br />

En el último console:

<br /><br />

<code>
    console.log(x + z);
</code>

<br /><br />

La variable x esta en el contexto global, por ende accedemos a su valor sin problema alguno.

<br /><br />

La variable z esta dentro del bloque if y no deberiamos poder acceder a ella, pero z esta declarada con var, esto la convierte en una variable con contexto de función y no de bloque, entonces accedemos a su valor, para poder sumar x + z que sería 40.'
author: 'cris-dux'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---

```javascript
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
}
console.log(x + z);
```