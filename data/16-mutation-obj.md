---
title: '¿Cuál es resultado de person.name?'
createdAt: '2022-03-31T04:11:00.096Z'
answers: ['nico', 'santi', 'null', 'undefined']
response: 1
explanation: 'En JavaScript existen dos tipos de asignaciones por referencia vs. por valor y esta diferencia es clave, ya que puede producir comportamientos inesperados.

<br /><br />

La asignación por valor funciona en los valores primitivos, como por ejemplo:
<br /><br />

<code>
    let  numberA = 45;<br />
    let numberB =  numberA;<br />
    numberA = 99;<br />
    console.log( numberB); // 45
</code>

<br /><br />
En el caso anterior numberB tiene el valor 45, diferente para arrays, funcions y objetos, en donde se hace una asignación por referencia:

<br /><br />

<code>
    const objA = {age: 45};<br />
    const objB =  objA;<br />
    objA.age = 99;<br />
    console.log( objB.age); // 99
</code>

<br /><br />
Quiere decir que no estamos copiando el valor, sino la referencia, por lo tanto, un cambio en él puede tener consecuencias en otro.'
author: 'nicobytes'
course: 'Curso de Manipulación de Arrays en JavaScript'
reference: 'https://platzi.com/clases/2461-arrays/40884-mutable-functions/'
level: 'intermediate'
---

```javascript
const person = { name: "nico", age: 28 };
const newPerson = person;
newPerson.name = "santi";
console.log(person.name);
```
