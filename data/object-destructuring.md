---
title: "¿Cuál es el output de este código?"
createdAt: "2022-07-02T18:36:52.280Z"
answers: [
    "['Raul', 30]",
    "[undefined, undefined]",
    "[undefined, 30]",
    "ReferenceError",
    ]
response: 2
explanation: 'Tenemos un objeto <code>student</code> que tiene dos propiedades <code>name</code y <code>age</code>, las cuales se inicializan a "Raul" y 30 respectivamente.
<br /> <br />
Luego, tenemos una destructuración del objeto, que lo que hace es tomar la propiedad nombre y toma la propiedad age y la renombra con la estructura de <code>age: edad</code>.
<br /> <br />

Cuando hacemos una destructuración de objetos, las variables deben tener el nombre exacto de la propiedad a la que queremos hacer referencia, es por esto que obtenemos un <code>undefined</code> como primer valor al intentar acceder a "nombre" cuando la propiedad correcta es "name".
<br /> <br />

En el segundo valor que obtenemos es <code>30</code>, ya que estamos usando la sintaxis de la  destruturación para asignar nombres de variable distintos de la propiedad del objeto, que sería:

<pre>
    <code>
        const { nombreDePropiedadOriginal: nombreDePropiedadNuevo} = object
    </code>
</pre>
'
author: 'cacosted'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---

```javascript
const student = {
  name: "Raul",
  age: 30,
};

const { nombre, age: edad } = student;

console.log([nombre, edad]); // ?
```
