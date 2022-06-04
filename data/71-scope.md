---
title: 'Explica este código JavaScript'
createdAt: '2022-06-04T18:39:35.708Z'
answers: ['Alex', 'ReferenceError: Cannot access 'nombre' before initialization', 'Oscar', 'SyntaxError']
response: 1
explanation: 'Dos aspectos a tomar en cuenta en este ejemplo.
<br/> <br/>
Primero, recordar que las variables declaradas con <code>let</code> o <code>const</code> tienen scope de bloque.
<br/>
Segundo, recordar que las variables declaradas con <code>let</code> o <code>const</code> no tienen hoisting, cuando intentamos acceder a una variable antes de su inicializción entra en la <strong>Temporal Dead Zone</strong>.

La variable nombre no puede ser mostrada sin antes inicializarla, <code>nombre</code> esta en su <strong>Temporal Dead Zone</strong>.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'advanced'
---
```javascript
function test(){
  let nombre = "Alex";
  if(true){
    console.log(nombre);
    let nombre = "Oscar";
  }
}
console.log(test());
```