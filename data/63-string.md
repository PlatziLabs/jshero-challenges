---
title: 'Explica este código JavaScript 😎'
createdAt: '2022-05-29T00:07:39.771Z'
answers: [
    'Los 3 imprimen: ['A','l','e','j','a','n','d','r','o']', 
    '['A','l','e','j','a','n','d','r','o'] , [], ['A','l','e','j','a','n','d','r','o']', 
    '['Alejandro'] , ['A','l','e','j','a','n','d','r','o'],
    ['A','l','e','j','a','n','d','r','o']', 
    'Alejandro, Alejandro, Alejandro']
response: 0
explanation: '<code>split</code> es un <strong>String Method</strong> que se encarga de convertir una cadena en arreglo, donde cada item del arreglo lo determina el separador que recibe <code>split</code> como parámetro.
Como le pasamos una cadena vacía entonces Alejandro se convierte en <code>['A','l','e','j','a','n','d','r','o']</code>.

<br/> <br/>

<strong>Spread Operator</strong> (...) expandirá o propagará la cadena Alejandro en <code>['A','l','e','j','a','n','d','r','o']</code>. El <strong>Spread Operator</strong> no solo funciona con arreglos, también puede ser usado con cadenas.

<br/> <br/>

<code>Array.from</code> es desde ES6 una manera más de convertir cadenas a arreglos, tambiém regresa <code>['A','l','e','j','a','n','d','r','o']</code>.
'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
const nombre = "Alejandro";

console.log(nombre.split(""));
console.log([...nombre]);
console.log(Array.from(nombre));
```