---
title: 'Explica este código JavaScript 😬'
createdAt: '2022-05-01T14:45:21.125Z'
answers: [
    'possible! You should see a therapist after so much JavaScript lol', 
    'Impossible! You should see a therapist after so much JavaScript lol', 
    'possible! You shouldn't see a therapist after so much JavaScript lol', 
    'Impossible! You shouldn't see a therapist after so much JavaScript lol'
    ]
response: 1
explanation: 'Muchas cosas que analizar en este ejemplo.

<br /> <br />

La sintaxis de backtick o de comillas simples invertidas (alt+96) sirven para evaluar expresiones dentro de cadenas de texto.

<br /> <br />

<strong>Primera expresión a evaluar:</strong><br /> <br />

En <code>${[] && 'Im'}</code> tenemos el operador de corto circuito <code>&&</code>.
Para usar los operadores de corto circuito debemos tener en cuanta los valores <i>truthy</i> y <i>falsy</i>.
Si la primera parte de la expresión evalua como <i>truthy</i> entonces ejecutamos la segunda parte de la expresión.

<br /> <br />

Los valores <i>truthy</i> son: <code>true</code>, <code>{}</code>, <code>[]</code>, cualquier valor de tipo number (42, -56, 1.5, -6.33), cualquier string que no sea vacio ("0", "Hola mundo", "false"), el objeto <code>Date</code> (<code>new Date()</code>).

<br /> <br />

Volviendo al ejemplo, un arreglo vacio <code>[]</code> es <i>truthy</i> entonces se ejecuta la segunda parte de la expresion, osea, el string <code>'Im'</code>.

<br /> <br />

<strong>Segunda expresión a evaluar:</strong>
En <code>${'' && n't}</code> nuevamente tenemos el operador de corto circuito <code>&&</code>, esta vez la primera parte de la expresión es un valor <i>falsy</i>.

<br /> <br />

Los valores <i>falsy</i> son: <code>false</code>, <code>0</code>, <code>""</code> (cualquier cadena vacía), <code>undefined</code>, <code>null</code>, <code>NaN</code>

<br /> <br />

La primera parte de la expresión es una cadena vacía que vendría a representar un valor <i>falsy</i> y por ello la segunda parte de la expresión <code>n't</code> no se ejecuta.

<br /> <br />

En conclusión, la respuesta es: <code>Impossible! You should see a therapist after so much JavaScript lol</code>'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---
```javascript
const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`
```