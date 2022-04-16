---
title: 'Explica este código JavaScript'
createdAt: '2022-04-16T23:41:31.976Z'
answers: ['Hi there', 'Hi there, undefined', 'Hi there, null', 'ReferenceError']
response: 1
explanation: 'En javascript los parámetros tienen por defecto el valor <code>undefined</code>, esto quiere decir que sino pasamos ningún parámetro a una función que los necesite tendremos <code>undefined</code>.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---

```
function sayHi(name) {
  return `Hi there, ${name}`
}
console.log(sayHi()); // 🤔?
```