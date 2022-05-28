---
title: 'Explica este código JavaScript'
createdAt: '2022-05-25T03:52:51.182Z'
answers: ['1', '0', '[]', '[1]']
response: 2
explanation: 'El método <code>lenght</code> es un getter y un setter al mismo tiempo, esto quiere decir que podemos obtener valores y podemos establecer los mismos dependiendo de lo que se necesite.

<br /><br/>

En este caso usar <code>length</code> y "setterlo" a <code>0</code> es una buena manera de borrar todos los elementos de un arreglo.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---
```javascript
const numeros = [1,2,3,4,5];
numeros.length = 0;
console.log(numeros); // ?
```