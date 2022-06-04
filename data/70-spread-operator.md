---
title: 'Explica este código JavaScript'
createdAt: '2022-06-04T18:32:10.135Z'
answers: ['SyntaxError', '6', '5', '4']
response: 3
explanation: 'Cuando pretendemos hacer una desestructuración de arreglos es súper importante tener en cuenta los índices del mismo. Usando la sintaxis de la <code>,</code> podemos saltar posiciones del arreglo hasta encontrar la propiedad que se desea obtener.
<br/><br/>
En el ejemplo usamos 3 veces <code>,</code> por ello saltamos 3 posiciones del arreglo nombres para poder obtener (con spread operator) la cadena <code>Cris</code> del arreglo anidado.
<br/><br/>
Finalmente aplicamos el método length con sintaxis de corchete.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
const nombres = ["Ana", "Sofia", "Carmen", ...["Cris"]];
const [, , , miNombre] = nombres;
console.log(miNombre["length"]);
```