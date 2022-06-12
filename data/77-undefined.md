---
title: 'Explica este código JavaScript'
createdAt: '2022-06-12T17:15:05.933Z'
answers: [
    'Solo el ejemplo #1', 
    'Ejemplo #2 y Ejemplo #3', 
    'Ejemplo #3 y Ejemplo #4', 
    'Todos los ejemplos']
response: 3
explanation: 'En javascript existen 4 maneras de obtener un <code>undefined</code> como resultado:
<br /> <br/>
Cuando declaramos una variable con <code>let</code> o <code>var</code> sin inicializarla, como en el ejemplo #1.
<br /> <br/>
Cuando en la llamada de una función omitimos parámetros obligatorios, como en el ejemplo #2.
<br /> <br/>
Cuando intenamos acceder a una propiedad de un objeto que no existe, como en el ejemplo #3.
<br /> <br/>
Cuando llamamos a una función que no tiene la sentencia <code>return</code> en su cuerpo, como en el ejemplo #4.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
//#1
let a;
console.log(a);

//#2
function f(x) {
  return x;
}
console.log(f());

//#3
const obj= {
  nombre:"Cris",
}
console.log(obj.edad);

//#4
function y(){
  let z =3;
  if(true){
    z=4;
  }
}
console.log(y())
```