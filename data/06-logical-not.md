---
title: '¿Qué imprime este código JavaScript?'
createdAt: '2022-03-22T01:59:13.895Z'
answers: ['false true false', 'false false true', 'false true true', 'true true false']
response: 1
explanation: 'El operador !! realiza una doble negación.
<br /><br />
En el primer caso, por coerción de tipos, null es un valor falsy, si lo negamos 2 veces, tendríamos false.
<br /><br />
En el segundo caso, por coerción de tipos, "" es un valor falsy, si lo negamos 2 veces tendríamos false.
<br /><br />
Por último, el tercer caso, y nuevamente por coerción de tipos, el valor 1 es un valor truthy, si lo negamos 2 veces, obtendremos true.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso Básico de JavaScript'
reference: 'https://platzi.com/clases/1814-basico-javascript/26300-operadores-asignacion-comparacion-y-aritmeticos/'
level: 'medium'
---

```javascript
!!null;
!!'';
!!1;
```
