---
title: '¿Cuál es el resultado del siguiente código?'
createdAt: '2022-04-07T17:11:32.206Z'
answers: [
    'Hoy toca comer: ensalda', 
    'Hoy toca comer: comida', 
    'Hoy toca comer: 'ensalada'', 
    'Hoy toca comer: undefined'
    ]
response: 3
explanation: 'Una de las limitaciones de las funciones flecha (arrow functions), es que no tiene sus propios enlaces a <code>this</code> o <code>super</code> y no se debe usar como métodos. <code>this</code> siempre apuntará a <code>this</code> desde el contexto en el que definimos la función (ejemplo window). Por tal razón, la función flecha <code> () => { ... } </code> no sabe de <code>this.comida</code>'
author: 'jesusmonge'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---

```javascript
var Alimento = function (comida) {
  this.comida = comida
}
Alimento.prototype.comerHoy = () => console.log('Hoy toca comer:', this.comida)
const alimento = new Alimento('ensalada')
alimento.comerHoy() //❓
```
