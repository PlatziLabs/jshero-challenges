---
title: 'Explica este código JavaScript 🧐'
createdAt: '2022-04-04T17:45:59.991Z'
answers: ['20, 40, 80, 160', '20, 40, 20, 40', '20, 20, 20, 40', 'NaN, NaN, 20, 40']
response: 2
explanation: 'Hay que concentrarse en el orden en que se llaman las funciones para comprender que es lo que pasa acá.

<br /><br />

<strong>Primera llamada:</strong>
A <code>multiply</code> no le pasamos ningún parámetro, por ende, toma el parámetro por defecto x que es un objeto desestructurado cuya key <code>number</code> tiene el valor de 10. Entonces <code>x.number *= 2</code> nos retorna 20.

<br /><br />

<strong>Segunda llamada:</strong>
Similar a la primera llamada, hacemos lo mismo, entonces obtenemos nuevamente 20.

<br /><br />

<strong>Tercera llamada:</strong>
A <code>multiply</code> en su llamada le pasamos el argumento <code>value</code> por lo que la función ahora ignora el parámetro por defecto. <code>number</code> es nuevamente 10, por ello el resultado de la multiplicación nuevamente será 20.

<br /><br />

<strong>Cuarta llamada:</strong>
Similar a la tercera llamada, pero el valor de value actual es 20 que fue el resultado de la tercera llamada, entonces ahora <code>x.number *= 2</code>, será 40.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---

```javascript
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); //🤔?
multiply(); //🤔?
multiply(value); //🤔?
multiply(value); //🤔?

```