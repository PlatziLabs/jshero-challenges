---
title: '¿Cuál es el resultado del siguiente código?'
createdAt: '2022-03-21T03:42:11.216Z'
answers: ['true', 'false', 'undefined', 'Uncaught SyntaxError: missing () after argument list']
response: 0
explanation: 'El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
<br /><br />
En el ejemplo tenemos un arreglo de elementos (fruits) y tenemos una variable asignada a count con la cual estamos utilizando el método some() para validar si el arreglo cumple con la condición implementada, la cantidad sea mayor a 5.
<br /><br />
some() ejecuta la función callback una vez por cada elemento presente en el array hasta que encuentre uno donde callback retorna un valor verdadero (true). Si se encuentra dicho elemento, some() retorna true inmediatamente. Si no, some() retorna false.
'
author: 'gndx'
course: 'Curso de Manipulación de Arrays en JavaScript'
reference: 'https://platzi.com/clases/2461-arrays/40878-some/'
level: 'basic'
---

```javascript
const fruits = [
  { id: 1, name: 'Lime', quantity: 5 },
  { id: 2, name: 'Apple', quantity: 30 },
  { id: 3, name: 'Pineapple', quantity: 3 },
];

const count = fruits.some((fruit) => fruit.quantity > 5);
```

¿Cuál es el resultado de count?
