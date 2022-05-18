---
title: 'Explica este código JavaScript 😎'
createdAt: '2022-05-18T16:02:36.511Z'
answers: ['Fernando, Fernando', 'Cristian, TypeError', 'Cristian, Fernando', 'TypeError, Fernando']
response: 3
explanation: 'Cuando declaramos variables primitivas con <code>const</code> estas deben ser como su nombre lo indica valores contantes, por ende no podemos motificar su valor, si intenamos cambiarlo obtendremos un <code>TypeError</code>.
<br/><br/>
Lo anterior mencionado no pasa con los objetos, si declaramos un objeto con const luego podemos tranquilamente modificar sus propiedades. ¿Por que pasa esto?
<br/><br/>
Las variables primitivas tienen <strong>asignación por valor</strong>, pero las variables complejas como los objetos tienen <strong>asignación por referencia</strong>, entonces cuando se intenta cambiar las propiedades de un objeto declarado con <code>const</code> estamos alterando sus propiedades pero no al objeto en si, en el ejemplo el objeto <code>persona</code> al ser creado reservamos un espacio en memoria que lo almacene, pero no cambiamos dicho espacio, solo sus propiedades.
<br/><br/>
Haciendo una analogía para comprederlo mejor, una persona, yo por ejemplo: Cristian; desde que naci soy Cristian, a medida que paso el tiempo varias cosas cambiaron en mi, aumento mi estatura, ahora uso lentes, mi cabello esta mas largo, etc., pero sigo siendo yo, pueden cambiar mis propiedades pero en el fondo sigo siendo yo.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---
```javascript
const nombre = "Cristian";
nombre = "Fernando";
console.log(nombre)

const persona = {
  id: 1,
  nombre: "Cristian",
};

persona.nombre = "Fernando";
console.log(persona.nombre);
```