---
title: 'Explica este código JavaScript'
createdAt: '2022-05-25T04:08:22.460Z'
answers: ['true', 'false', 'TypeError', 'undefined']
response: 0
explanation: 'Pese a que <code>null</code> es un primitivo, debido a un bug del lenguaje su tipo de dato es <code>object</code>.
<br/> <br/>
Este bug es muy antiguo y se determino que no vale la pena arreglarlo al día de hoy ya que se pueden romper muchos programas que pueden depender de esta error.

<br /><br/>

Este bug es bastante conocido en programadores experimentados y usado en entrevistas laborales para estimar tu conocimiento del lenguaje.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
console.log(typeof null == 'object'); // ?
```