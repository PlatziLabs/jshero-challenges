---
title: '¿Qué imprime este código JavaScript?'
createdAt: '2022-03-25T12:34:37.450Z'
answers: ['["O", "s", "c", "a", "r"]', '["Oscar"]', '[[], "Oscar"]', '[["O", "s", "c", "a", "r"]]']
response: 0
explanation: 'Un string es un elemento iterable en JavaScript, por ende es posible usar el spread operator directamente obteniendo la propagación de la cadena letra por letra.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---

```javascript
console.log([...'Oscar']);
```
