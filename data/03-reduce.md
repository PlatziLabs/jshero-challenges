---
title: Analiza determinadamente el siguiente código
createdAt: '2022-03-18T05:58:00.954Z'
answers:
  [
    'Uncaught ReferenceError',
    '[undefined, undefined, undefined, undefined, undefined]',
    '[ 1, 1, 1, 1, 1]',
    '5',
  ]
response: 3
explanation: 'El método reduce() recorre el array y llama a la función reductora, almacena el valor del cálculo del array por la función en un acumulador. Un acumulador es una variable que se recuerda todas las iteraciones para almacenar los resultados acumulados de recorrer un array. Podemos usar esto para iterar a través del array, agregar el valor del elemento al acumulador y obtener la suma del array.
<br /><br />
El código representado es un ejemplo de la implementación de una función reductora para sumar todos los elementos del array.'
author: 'gndx'
course: 'Curso de Manipulación de Arrays en JavaScript'
reference: 'https://platzi.com/clases/2461-arrays/40876-reduce/'
level: 'basic'
---

```javascript
const array = [1, 1, 1, 1, 1];
const rta = array.reduce((total, item) => total + item, 0);
```

¿Cuál es el valor retornado por rta?
