---
title: 'Explica este código JavaScript'
createdAt: '2022-05-09T13:16:21.321Z'
answers: ['Pedro', 'Fernando', 'null', 'TypeError']
response: 0
explanation: 'Inicialmente el objeto <code>persona</code> tiene en la llave nombre la cadena <code>Fernando</code> pero luego hacemos <code>persona.nombre = "Pedro"</code> que actualiza el valor de <code>nombre</code> perdiendo la cadena <code>Fernando</code>.
'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---
```javascript
const persona = {
  id: 1,
  nombre:"Fernando",
};
persona.nombre = "Pedro";
console.log(persona.nombre);
```