---
title: 'Explica este código JavaScript'
createdAt: '2022-06-12T18:02:21.474Z'
answers: [
    'true, false, false, true, true', 
    'false, false, true, true, false', 
    'true, true, false, false, false', 
    'false, ReferenceError, false, false, true']
response: 0 
explanation: 'El constructor <code>Boolean</code> permite convertir valores a tipo boolean.
<br /> <br/>
Los valores <code>truthy</code> como el número <code>37</code>, un objeto vacío, o un <code>Symbol</code> infieren a <code>true</code> sin ninguna complicación.
<br /> <br/>
Valores como <code>NaN</code>, cadenas vacías o <code>0</code> al ser considerados valores <code>falsy</code> inferirán a <code>false</code>.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
const toBolean = x => Boolean(x);

console.log(toBolean(37));
console.log(toBolean(0/0));
console.log(toBolean(0));
console.log(toBolean({}));
console.log(toBolean(Symbol("Soy un symbol")));
```