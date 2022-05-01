---
title: 'Explica este código JavaScript 😬'
createdAt: '2022-05-01T15:55:55.915Z'
answers: ['3, NaN, NaN', '3, 7, NaN', '3, Lydia2, [Object object]2', '"12", Lydia2, [Object object]2']
response: 2
explanation: 'A cada item del <code>Set</code> aplicamos el operador <code>+</code> con el número <code>2</code>.
<br /><br />
Para <code>1</code> que es <code>number</code> realizamos una suma simple obteniendo como resultado <code>3</code>.
<br /><br />
Para la cadena <code>Lydia</code> y por <strong>coerción de tipos</strong> convertimos al número <code>2</code> en <code>string</code> y realizamos una concatenación obteniendo <code>Lydia2</code>.
<br /><br />
Para el objeto <code>{ name: "Lydia" }</code> nuevemente por <strong>coerción de tipos </strong> convertimos tanto al objeto y al número <code>2</code> a <code>string</code> obteniendo <code>[Object object]2</code>.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
const set = new Set()

set.add(1)
set.add("Lydia")
set.add({ name: "Lydia" })

for (let item of set) {
  console.log(item + 2)
}
```