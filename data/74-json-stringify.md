---
title: 'Explica este código JavaScript'
createdAt: '2022-06-12T15:40:45.757Z'
answers: ['true, false', 'false, false', 'false, true', 'true, true']
response: 0
explanation: '<code>JSON.stringify</code> convierte a los arreglos en cadenas.
Para los arreglos <code>a</code> y <code>b</code> tendríamos:
<br/> <br/>
<code>
    console.log("[1, 2, 3]" === "[1, 2, 3]"); //true
</code>
<br/> <br/>
Para los arreglos <code>a</code> y <code>c</code> tendríamos:
<br/> <br/>
<code>
    console.log("[1, 2, 3]" === "[1, 2, "3"]"); //false
</code>
Son simples comparaciones de primitivos, en este caso de cadenas.
Usar <code>JSON.stringify</code> es muy común cuando se quiere verificar si 2 arreglos son iguales o no.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
const a = [1, 2, 3];
const b = [1, 2, 3];
const c = [1, 2, "3"];
console.log(JSON.stringify(a) === JSON.stringify(b)); //? 🤔
console.log(JSON.stringify(a) === JSON.stringify(c)); //? 🤔
```