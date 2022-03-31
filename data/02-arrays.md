---
title: ¿Cuál es el resultado del siguiente código?
createdAt: '2022-03-17T05:00:00.954Z'
answers:
  [
    '[ undefined, undefined, undefined ]',
    '["a", "bb", "ccc"]',
    '[ 1, 2, 3 ]',
    '[0,1,2]',
  ]
response: 2
explanation: 'El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
<br /><br />
.map() es inmutable, por lo tanto, no modifica el array original, sino que crea uno nuevo con la “transformación” aplicada. Además, mantienes el mismo length que el array original, te devuelve en el nuevo array la misma cantidad que el array que le aplicaste el método.'
author: 'gndx'
course: 'Curso de Manipulación de Arrays en JavaScript'
reference: 'https://platzi.com/clases/2461-arrays/40874-map-reloaded/'
level: 'basic'
---

```javascript
const array = ['a', 'bb', 'ccc'];
const rta = array.map((item) => item.length);
```
