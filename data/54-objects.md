---
title: 'Explica este código JavaScript 😎'
createdAt: '2022-05-16T18:13:22.592Z'
answers: ['Radiohead', 'undefined', 'nombre', 'SyntaxError']
response: 0
explanation:'En JavaScript hay dos maneras de acceder a las propiedades de un objeto, con la <strong>notación de punto</strong> y con la <strong>notación de corchetes</strong>.
<br/><br/>
Usamos la <strong>notación de punto</strong> cuando conocemos el nombre literal de la propiedad a la que queremos acceder.
La key a la que accedemos con esta notación debe ser un nombre de variable válido.
<br/><br/>
La <strong>notación de corchetes</strong> se diferencia en que todo lo que este dentro de los corchetes debe ser un <code>string</code> y es evaluado por JavaScript como una <strong>expresión</strong>.
<br/><br/>
Por este motivo, cuando hacemos <code>console.log(banda["nom"+"bre"])</code> el lenguaje evalua los corchetes concatenando las cadenas de texto y mostramos por consola <code>Radiohead</code>.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---
```javascript
const banda = {
  id:1,
  nombre: "Radiohead",
  "tipo de musica": "Rock",
  albunes: ["Pablo Honey", "Ok Computer", "In Rainbows"]
};

console.log(banda["nom"+"bre"])
```