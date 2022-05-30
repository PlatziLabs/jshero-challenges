---
title: 'Explica este código JavaScript 😎'
createdAt: '2022-05-29T01:21:31.004Z'
answers: [
    '['h','o','l','a']', 
    '['a','l','o','h']', 
    '"hola"', 
    '"aloh"']
response: 3
explanation: 'Estos 3 métodos de cadenas se preguntan mucho en entrevistas.
Veamos paso por paso que sucede:
<br/> <br/>
Aplicamos <code>split</code>:<br/>
<code>split</code> convierte una cadena en arreglo dependiendo del parámetro que se le pase, en este caso una cedena vacía: ['h','o','l','a'].
<br/> <br/>
Aplicamos <code>reverse</code>:<br/>
<code>reverse</code> es un método de arreglos, invierte todos los elementos del arreglo: <code>['a','l','o','h']</code>.
<br/> <br/>
Aplicamos <code>join</code>:<br/>
<code>join</code> es un método de arreglos que convierte un arreglo en cadena nuevamente dependiendo del parámetro que se le pase, en este caso una cadena vacía: <code>"aloh"</code>'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---
```javascript
console.log("hola".split("").reverse().join("")); // ?
```