---
title: 'Explica este código JavaScript'
createdAt: '2022-06-12T16:58:22.727Z'
answers: ['true, false', 'false, true', 'true, NaN', 'true, undefiend']
response: 1
explanation: 'El operador de igualdad estricta es muy potente, pero ¿sabias que existe uno aún mejor?
<br /> <br />
<code>Object.is</code> recibe 2 parámetros y hace una comparación profunda entre ellos, pero va un poco más lejos.
<br /> <br />
Casos como: <code>0 === -0</code> y <code>NaN === NaN</code> son mejor manejados con <code>Object.is</code>.
<br /> <br />
Cuando comparamos un <code>NaN</code> vs otro <code>NaN</code> usando <code>===</code> obtenemos siempre false lo que no tiene mucho sentido, en estos casos es mejor usar <code>Object.is</code>.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
const a = NaN;
const b = 5/"Hola";

console.log( a === b ); // 🤔?
console.log(Object.is(a, b)); //🤔?
```