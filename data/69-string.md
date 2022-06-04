---
title: 'Explica este código JavaScript'
createdAt: '2022-06-04T18:06:59.945Z'
answers: [
    '"Mi nombre es %s y tengo %d"', 
    'SyntaxError', 
    'Mi nombre es Cris y tengo 25', 
    'Ninguna de las anteriores'
    ]
response: 2
explanation: 'En javascript como en java es posible usar <strong>sustituciones de variables</strong> con el operador <code>%</code> seguido de un caracter que especifica el tipo de dato que se pretende imprimir.
En este caso, <code>$s</code> reemplaza un string ("Cris") y <code>%d</code> reemplaza un valor decimal o dígito numérico (25).
<br/><br/>
Este método de imprimir por consola no es muy usado, ni siquiera es conocido, pero esta bueno saber que existe.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
let nombre = "Cris";
let edad = 25;

console.log("Mi nombre es %s y tengo %d", nombre, edad);
```