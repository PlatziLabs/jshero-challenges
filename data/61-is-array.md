---
title: '61-is-array'
createdAt: '2022-05-25T04:00:17.246Z'
answers: ['true', 'false', '[]', 'ReferenceError']
response: 0
explanation: 'Una manera adecuada de comprobar que un arreglo es efectivamente un arreglo es usar el constructor <code>Array</code> con su método <code>isArray</code>.

<br/> <br/>

Como <code>arr</code> es un arreglo (vacío pero arreglo al fin), entonces regresamos <code>true</code>.

<br/> <br/>

Como los arreglos no son un tipo de dato per se en JavaScript, la mejor manera de comprobar si un arreglo es un arreglo es de esta manera.


<br/> <br/>

¿Te cuento un secreto? Esta pregunta es bastante frecuente en entrevistas laborales, pero shhh, no se lo digas a nadie 👀'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---
```javascript
const arr = [];
console.log(Array.isArray(arr)); // ??
```