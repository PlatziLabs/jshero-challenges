---
title: 'Explica este código JavaScript 😬'
createdAt: '2022-05-01T16:06:57.164Z'
answers: ['Not the same!', 'They are the same!', 'ReferenceError', 'SyntaxError']
response: 1 
explanation: 'Tanto el parámetro <code>person1</code> como <code>person2</code> adoptará el valor de <code>person</code>, osea el objeto <code>{ name: "Lydia" }</code>.

Los objetos se pasan por referencia. En el ejemplo, <code>person1</code> y <code>person2</code> apuntan a la misma dirección de memoria entonces la condición del <code>if</code> no se cumple y pasamos a imprimir <code>They are the same!</code>.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---
```javascript
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log("Not the same!")
  } else {
    console.log("They are the same!")
  }
}

const person = { name: "Lydia" }

compareMembers(person)
```