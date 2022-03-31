---
title: '¿Qué crees que imprime el siguiente código?'
createdAt: '2022-03-23T04:20:59.532Z'
answers:
  [
    'Uncaught TypeError : cannot read property',
    'TypeError: null is not an object (evaluating)',
    'Naranja',
    'Pera',
  ]
response: 3
explanation: 'Para usar la desestructuración en arreglos es importante tener en cuenta los índices de los elementos. Por ello para acceder a Pera en el arreglo frutas hariamos algo como:
<br/><br/>
const [, , , pera]  = frutas;
<br/><br/>
Donde cada , representa el salto de un índice del arreglo.
<br/><br/>
Para una sistaxis mas breve podemos usar esto:
<br/><br/>
const { 3:pera } = frutas;
<br/><br/>
Donde el 3 representa las posiciones que deseamos saltar.
Nota que aunque frutas sea un arreglo usamos {} para la desestructuración'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'medium'
---

```javascript
const frutas = ['Mango', 'Manzana', 'Naranja', 'Pera'];
const { 3: pera } = frutas;
console.log(pera);
```
