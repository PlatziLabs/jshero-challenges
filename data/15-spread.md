---
title: 'Explica este código JavaScript'
createdAt: '2022-03-31T04:03:32.096Z'
answers: ['SyntaxError', '6', '5', '4']
response: 3
explanation: 'Cuando pretendemos hacer una desestructuración de arreglos es súper importante tener en cuenta los índices del mismo. Usando la sintaxis de la , podemos saltar posiciones del arreglo hasta encontrar la propiedad que se desea obtener.
<br/><br/>
En el ejemplo usamos 3 veces , por ello saltamos 3 posiciones del arreglo nombres para poder obtener (spread operator) la cadena Cris del arreglo anidado.
<br/><br/>
Finalmente aplicamos el método length con sintaxis de corchete.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---

```javascript
const nombres = ['Ana', 'Sofia', 'Carmen', ...['Cris']];
const [, , , miNombre] = nombres;
console.log(miNombre['length']);
```
