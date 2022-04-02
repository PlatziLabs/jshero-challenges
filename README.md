# JSHero - jshero.platzi.com 💻

Create a new challenge for jshero.platzi.com, share your experience creating amazing challenges.

### Create a new challenge:

```bash
npm run compose
```

### Structure of a challenge:

```javascript
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
response: 2 // Position of array in answers
explanation: 'El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
<br /><br />
.map() es inmutable, por lo tanto, no modifica el array original, sino que crea uno nuevo con la “transformación” aplicada. Además, mantienes el mismo length que el array original, te devuelve en el nuevo array la misma cantidad que el array que le aplicaste el método.'
author: 'gndx' // Platzi Username
course: '' // reference course title
reference: 'https://platzi.com/clases/' // URL of the course or class
level: 'basic | intermediate | advanced'

---

const array = ['a', 'bb', 'ccc'];
const rta = array.map((item) => item.length);
```

### Have Fun! 😎
