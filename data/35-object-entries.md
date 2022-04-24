---
title: 'Explica este código JavaScript 🤔'
createdAt: '2022-04-24T04:17:56.757Z'
answers: ['name Lydia y age 21', '["name", "Lydia"] y ["age", 21]', '["name", "age"] y undefined', 'Error']
response: 0
explanation: 'El método <code>entries</code> del constructor <code>Object</code> regresa un arreglo anidado donde cada sub arreglo corresponde a la llave y valor del objeto:

<br /> <br />

<pre>
    <code>
        [ [ 'name', 'Lydia' ], [ 'age', 21 ] ]
    </code>
</pre>

<br /> <br />

Con el bucle <code>for...of</code> iteramos sobre el objeto desestructurando los valores con la sintaxis <code>[x, y]</code>.

<br /> <br />

El primer sub arreglo es <code>[ "name", "Lydia" ]</code> donde <code>x</code> toma el valor <code>name</code> y <code>y</code> toma el valor <code>Lydia</code>.

<br /> <br />

El segundo arreglo es <code>[ 'age', 21 ]</code> donde <code>x</code> toma el valor <code>age</code> y <code>y</code> toma el valor <code>21</code>.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---
```javascript
const person = {
  name: "Lydia",
  age: 21
}

for (const [x, y] of Object.entries(person)) {
  console.log(x, y); //🤔?
}
```