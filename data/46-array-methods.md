---
title: '¿Cuál de estos métodos modifica el array original?'
createdAt: '2022-05-08T01:51:39.689Z'
answers: ['Todos los anteriores', 'map reduce slice splice', 'map slice splice', 'splice']
response: 3
explanation: '<code>splice</code> es un método mutable de arreglos capaz de agregar, eliminar o reemplazar los items.

<br /> <br />

El resto de los métodos son usados mucho en programación funcional y por ende son inmutables.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de Manipulación de Arrays en JavaScript'
reference: 'https://platzi.com/clases/2461-arrays/40876-reduce/'
level: 'intermediate'
---
```javascript
const emojis = ['✨', '🥑', '😍']

emojis.map(x => x + '✨')
emojis.filter(x => x !== '🥑')
emojis.find(x => x !== '🥑')
emojis.reduce((acc, cur) => acc + '✨')
emojis.slice(1, 2, '✨') 
emojis.splice(1, 2, '✨')
```