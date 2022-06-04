---
title: 'Explica este código JavaScript'
createdAt: '2022-06-04T19:00:00.751Z'
answers: [
    'true false true', 
    'false false false', 
    'true true true', 
    'false false true']
response: 3
explanation: 'Este ejemplo es bien sencillo pero abarca varios temas interesantes de javascript.
<br /><br/>
La función se encarga de verificar si un arreglo esta vacío o no, para ello hacemos una doble verificación:
<br /><br/>
Primero, corroboramos que el parámetro <code>arr</code> sea un arreglo, la manera más eficiente de hacerlo es usando el método <code>isArray</code> del objeto <code>Array</code> el cual regresa <code>true</code> si es un arreglo y <code>false</code> sino lo es.
<br /><br/>
Segundo, corroboramos que la longitud del arreglo sea <code>0</code> y convertimos esa salida a <code>boolean</code> para poder hacer una comparación de boeleanos con el operador de corto circuito <code>&&</code>.
<br /><br/>
Veamos caso por caso:
<br /><br/>

<code>[1,2,3]</code>, es un arreglo pero no esta vacío.
Entonces tendriamos: <code>true && false</code>, que evalua a <code>false</code>.
<br /><br/>
<code>[0]</code>, es un arreglo y tampoco esta vacío.
Entonces tendriamos: <code>true && false</code>, que evalua a <code>false</code>.
<br /><br/>
<code>[]</code> es un arreglo y si esta vacío.
Entonces tendriamos: <code>true && true</code>, que evalua a <code>true</code>.
<br /><br/>
Conclusión: <code>false false true</code>.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de Manipulación de Arrays en JavaScript'
reference: 'https://platzi.com/clases/2461-arrays/40874-map-reloaded/'
level: 'intermediate'
---
```javascript
const f = arr => Array.isArray(arr) && !arr.length;

console.log(f([1,2,3])); //?
console.log(f([0])); //?
console.log(f([])); //?
```