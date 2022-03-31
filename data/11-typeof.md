---
title: '¿Qué imprime este código JavaScript?'
createdAt: '2022-03-27T02:21:03.092Z'
answers: ['undefined', 'number', 'object', 'string']
response: 3
explanation: 'El operador + por lo general intentará realizar una concateneción, en este caso, el interprete de JavaScript, por coerción de tipos intentará convertir los arreglos a cadenas de texto, haciendo algo como esto aunque no lo veamos:
<br /><br />
console.log(typeof ([].toString() + [].toString())); //string
console.log(typeof ("" + ""));
console.log(typeof ("")); //string
'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---

```javascript
console.log(typeof ([] + []));
```
