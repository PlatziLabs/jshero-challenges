---
title: '¿Cuál es la salida del siguiente código?'
createdAt: '2022-04-05T14:45:44.423Z'
answers: ['true null 0', 'true "hello" []', '{} "hello" true', 'null "" true']
response: 1
explanation: 'Con el operador || "OR", devolvemos el primer valor booleano verdadero "true", si todos los valores son falsos, se devuelve el último valor de la sentencia. <br/> <br/> En la constante one: (true || {} || null); su primer valor es verdadero, por lo tanto, retorna true. <br/><br/> En la constante two: (null || "hello" || ""); null es un valor falso "false", la cadena "hello" es un valor verdadero "true", por lo tanto, retornará la cadena "hello" y no evaluará más condiciones. <br/><br/> En la constante three: (0 || [] || true); el valor 0 es un valor falso "false", mientras que el arreglo "array" vacío es un valor verdadero "true", por lo tanto retornaría el arreglo vacío. <br/> <br/> Entonces, la salida de este código sería: (true, "hello", []);'
author: 'Zawng'
course: 'https://platzi.com/cursos/basico-javascript/'
reference: 'https://platzi.com/clases/1814-basico-javascript/26299-valores-truthy-y-falsy/'
level: 'advanced'
---

```javascript
const one = true || {} || null;
const two = null || 'hello' || '';
const three = 0 || [] || true;
console.log(one, two, three);
```
