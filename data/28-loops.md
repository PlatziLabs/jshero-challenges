---
title: 'Explica este código JavaScript'
createdAt: '2022-04-13T22:52:58.175Z'
answers: [
    '0 1 2 3 y "☕" "💻" "🍷" "🍫"', 
    '"☕" "💻" "🍷" "🍫" y "☕" "💻" "🍷" "🍫"', 
    '"☕" "💻" "🍷" "🍫" y 0 1 2 3', 
    '0 1 2 3 y {0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}'
    ]
response: 0
explanation: 'Con el bucle <i>for-in</i>, podemos iterar sobre propiedades <strong>enumerables</strong>. Los enumerables en el arreglo son justamente sus índices. Por ello es <code>0 1 2 3</code>.

<br /><br /> 

Con un bucle <i>for-of</i>, podemos recorrer <strong>iterables</strong>. Un arreglo por definición es un iterable, en cada iteración la variable <code>item</code> es igual al elemento sobre el cual se itera en ese momento. Por ello es <code>"☕" "💻" "🍷" "🍫"</code>.

<br /><br /> 

En la practica los bucles <i>for-of</i> son más usados y ocacionalmente los bucles <i>for-in</i>.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---

```javascript
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"];

for (let item in myLifeSummedUp) {
  console.log(item); //🤔?
}

for (let item of myLifeSummedUp) {
  console.log(item); //🤔?
}
```