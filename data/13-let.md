---
title: '¿Qué imprime este código JavaScript?'
createdAt: '2022-03-29T02:56:22.468Z'
answers: ['{}', 'ReferenceError: greetign is not defined', 'undefined', 'null']
response: 0
explanation: 'En la primera línea declaramos let greeting;, al declarar una variable con let sin inicializarla, esta toma el valor de undefined.
<br/><br/>
En la segunda línea, se comete un error de tipeo greetign = {};, pero como la variable no esta declarada ni con var, let o const; Javascript tras bambalinas hace algo como lo siguiente aunque el programador no lo vea:
<br/><br/>
var greetign = {}; // Typo!
<br/><br/>
Entonces greetign se crea como variable global, en el navegador en el objeto window y en un entorno de Node.js en el objeto global.
<br/><br/>
El código final se veria así:
<br/><br/>
let greeting; // undefined<br/>
var greetign = {}; // Typo!<br/>
console.log(greetign); // {}<br/>
'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```
