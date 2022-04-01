---
title: 'Explica este código JavaScript'
createdAt: '2022-04-01T04:01:09.353Z'
answers: ['42', '\"42\"', '7', 'NaN']
response: 2
explanation: 'parseInt convierte un valor a tipo number de una base concreta (base binaria, octal, decimal, etc).
<br/><br/>
En el ejemplo intentamos convertir "7*6" a base 10, osea, a base decimal.
<br/><br/>
parseInt toma los valores validos de izquierda a derecha, dicho esto, solo tomará el valor 7 (el * y todo lo que le precede no es un valor valido para parseInt).
<br/><br/>
En conclusión, solo convierte al 7 de string a number.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---

```javascript
const num = parseInt("7*6", 10);
console.log(num); //?
```