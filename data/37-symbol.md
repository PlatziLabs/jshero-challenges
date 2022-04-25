---
title: 'Explica este código JavaScript 🤔'
createdAt: '2022-04-25T02:13:40.678Z'
answers: ['{Symbol('a'): 'b'} y ["{Symbol('a')"]', '{} y []', '{ a: "b" } y ["a"]', '{Symbol('a'): 'b'} y []']
response: 3
explanation: 'Una variable de tipo Symbol cumple con 3 caracteristicas principales:

<br /><br />

<ul>
    <li>No es un elemento enumerable.</li>
    <li>Permite representar valores completamente únicos en el código, útil para crear llaves de objetos y evitar colisiones.</li>
    <li>Podemos crear propiedades "ocultas" en objetos.</li>
</ul>

<br /><br />

El primer <code>console.log</code> imprime el objeto en su totalidad, incluyendo los valores no enumerables, por ello podemos ver la <code>key</code> de tipo <code>Symbol</code> y su valor un <code>string</code> con valor <code>b</code>.

<br /><br />

Al intentar obtener las <code>keys</code> del objeto con <code>Object.keys</code> obtendremos un arreglo vacio justamente por que el <code>Symbol</code> no es un elemento que se pueda enumerar, de esta manera es posible "ocultar" ciertas propiedades de un objeto.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
const info = {
  [Symbol('a')]: 'b'
}

console.log(info); 🤔?
console.log(Object.keys(info)); 🤔?
```