---
title: 'Explica este c贸digo JavaScript 馃槵'
createdAt: '2022-05-01T16:21:53.329Z'
answers: ['true', 'false', 'undefined', 'TypeError']
response: 3
explanation: 'En javascript existen 2 maneras de acceder a las propiedades de los objetos, por notaci贸n del punto o por notaci贸n de corchetes.

<br /><br/>

Cuando hacemos <code>colorConfig.colors[1]</code> literalmente estamos buscando una propiedad colors en el objeto <code>colorConfig</code> y como no existe esta propiedad entonces obtenemos un <code>undefiend</code>, entonces ahora javascript intentar谩 hacer <code>undefined[1]</code> y esto no es un c贸digo valido, por ello la consola muestra un <code>TypeError</code>.

<br /><br/>

Cuando queremos usar variables para hacer lo que se denomina acceso a propiedades din谩micas de objetos necesitamos usar la notaci贸n de corchetes: <code>colorConfig[colors[1]]</code> que nos devolver谩 true, el valor de la propiedad red del objeto <code>colorConfig</code>.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
}

const colors = ["pink", "red", "blue"]

console.log(colorConfig.colors[1])
```