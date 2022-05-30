---
title: 'Explica este código JavaScript'
createdAt: '2022-05-30T17:15:38.771Z'
answers: [
    'Error, el método flat no existe.', 
    '[1,2,3,4,5,6,7,8,9,0]', 
    '[1,2,3,4,5,6,[7,8],9,0]', 
    '[1,2,[3,4],5,7,8,9,0]'
    ]
response: 1
explanation: '<code>flat</code> es un <strong>array method</strong> que crea un nuevo arreglo con los elementos concatenados recursivamente hasta una profundidad especificada.
<br/>
Dicho en otras palabras, permite "aplanar" un arreglo anidado un número determinado de veces. Es una buena alernativa a usar por ejemplo reduce para hacer lo mismo y no muchos devs conocen que existe esta catacterística en el lenguaje.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
const numeros = [1,2,[3,4],5,6,[7,8],9,0];
console.log(numeros.flat()); // ?
```