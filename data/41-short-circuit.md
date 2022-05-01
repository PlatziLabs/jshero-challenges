---
title: '41-short-circuit'
createdAt: '2022-05-01T15:12:18.859Z'
answers: [
    'false null []', 
    'null "" true', 
    '{} "" []', 
    'null null true'
    ]
response: 2 
explanation: 'En javascript el código se lee de arriba hacia abajo y de izquierda a derecha.

<br /> <br />

<strong>Para la variable <code>one</code></strong>: <code>false || {} || null</code>

<br /> <br />

Primero evaluamos <code>false || {}</code> y obtenemos <code>{}</code>.<br />
Entonces nos queda <code>{} || null</code> y como las llaves vacías es un valor <i>truthy</i> entonces el <code>null</code> no se evalua dando como resultado <code>{}</code>.

<br /> <br />

<strong>Para la variable <code>two</code></strong>: <code>null || false || ""</code>
Primero evaluamos <code>null || false</code>, <code>null</code> es <i>falsy</i> entonces si ejecutamos <code>false</code>. <br />
Entonces nos queda <code>false || ""</code>, y obtenemos como resultado la cadena vacía <code>""</code>.

<br /> <br />

<string>Para la variable <code>three</code></string>: <code>[] || 0 || true</code>
Primero evaluamos <code>[] || 0</code>, el arreglo vacío es un valor <i>truthy</i> por lo que <code>0</code> no se ejecuta.
Entonces nos queda <code>[] || true</code>, nuevamente el arreglo vacío es <i>truthy</i> y esta vez es <code>true</code> quien no se llega a ejecutar, entonces el resultado es <code>[]</code>.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---
```javascript
const one = (false || {} || null)
const two = (null || false || "")
const three = ([] || 0 || true)

console.log(one, two, three) // 🤔?
```