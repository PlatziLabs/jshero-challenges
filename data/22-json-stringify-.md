---
title: 'Explica este código JavaScript 😬'
createdAt: '2022-04-04T16:35:46.229Z'
answers: [
    '"{"level":19, "health":90}"', 
    '"{"username": "lydiahallie"}"', 
    '"["level", "health"]"', 
    '"{"username": "lydiahallie", "level":19, "health":90}"'
    ]
response: 0
explanation: '<code>JSON.stringify</code> puede recibir un 2do parámetro opcional denominado <code>replacer</code>, puede ser una función o un arreglo, y se encarga de hacer un filtro de las propiedades del objeto que deseamos convertir a <code>string</code>, en el ejemplo solo deseamos convertir las propiedades <code>["level", "health"]</code>, ignorando <code>username</code>.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data); //🤔?
```