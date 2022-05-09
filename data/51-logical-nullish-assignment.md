---
title: 'Explica este código JavaScript'
createdAt: '2022-05-09T12:41:58.126Z'
answers: ['undefined', '{}', '{ name:"Sin Nombre" }', 'Ninguno de los anteriores']
response: 2
explanation: 'El operador <code>??=</code> se llama <strong>Logical Nullish Assignment</strong> es un operador de corto circuito moderno que consiste en ejecutar porciones de código si evaluamos una condición como <strong>nullish</strong>, osea, como valor <code>null</code> o <code>undefined</code>.
<br /><br />
Entonces, en el ejemplo, si <code>obj.name</code> evalua como nullish, ejecutamos <code>"Sin Nombre"</code>.
<br /><br />
Llamamos a la función <code>getName</code> pasandole un objeto vacío, entonces todas sus propiedades son <code>undefined</code> y por consecuencia nullish, por ello a <code>obj.name</code> se el asigna el valor <code>"Sin Nombre"</code> y retornamos ese objeto.
'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
const getName = (obj) => {
  obj.name ??= "Sin Nombre";
  return obj;
}
console.log(getName({}))
```