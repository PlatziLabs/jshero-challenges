---
title: '¿Qué imprime este código JavaScript?'
createdAt: '2022-03-30T04:08:28.228Z'
answers: ['true false true', 'false false true', 'true false false', 'false true true']
response: 2
explanation: 'En el primer console.log:
<br/><br/>
console.log(a == b);
<br/><br/>
Vemos que hacemos una comparación débil con el operador ==, esto significa que solo compararemos los valores de a y b, por ende obtendremos un true.
<br/><br/>
En el segundo console.log:
<br/><br/>
console.log(a === b);
<br/><br/>
Hacemos una comparación estricta usando el operador ===, esto significa que compararemos valores y tipos de datos, a y b tienen el mismo valor, pero a es de tipo number y b esta siendo inicializada usando el contructor Number, por ende es un objeto; entonces obtendremos un false.
<br/><br/>
En el tercer console.log
<br/><br/>
console.log(b === c);
<br/><br/>
Al igual que el caso anterior, intentamos comparar de manera estricta un objeto contra un número, entonces tendremos como resultado un false.
<br/><br/>
Conclusión: trata de usar simpre ===.
'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---

```javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```
