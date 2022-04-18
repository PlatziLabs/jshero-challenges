---
title: 'Explica este código JavaScript 🤔'
createdAt: '2022-04-18T15:55:12.416Z'
answers: ['Sorry, you're too young.', 'Yay! You're old enough!', 'ReferenceError', 'undefined']
response: 2
explanation: '<code>const</code> tiene scope de bloque para las variables, cuando intentamos hacer <code>return message</code> la variable <code>message</code> no puede ser accedida. Tanto <code>message</code> en el bloque <code>if</code> como en el <code>else</code> son variables diferentes por que estan en bloques diferentes pese a que se llaman igual. Como no es posible acceder a la variable la respuesta es <code>ReferenceError</code>.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---
```javascript
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young."
  } else {
    const message = "Yay! You're old enough!"
  }
  return message
}

console.log(checkAge(21)); //🤔?
```