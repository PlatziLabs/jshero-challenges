---
title: 'Explica este código JavaScript 😎'
createdAt: '2022-04-02T19:36:04.000Z'
answers: [
    'No hay diferencia, son exactamente iguales.', 
    'La primera función es más rápida que la segunda.', 
    'La primera función tiene hoisting, la segunda no.', 
    'Solo cambia la sintaxis, luego son iguales.'
    ]
response: 2
explanation: 'Con una función como la primera es posible hacer esto:

<br /><br />

<pre>
    <code>
        console.log(suma(3,5)); //8<br />
        function sumar(a, b){<br />
        return a + b;<br />
        }
    </code>
</pre>

<br /><br />

Podemos llamar a la función antes de su declaración, característica que se denomina hoisting.

<br /><br />

Con una función de flecha esto no es posible:

<br /><br />

<pre>
    <code>
        console.log(sumar(3,5)); // ReferenceError: can't access lexical declaration 'sumar' before initialization<br />

        const sumar = (a, b) => {<br />
        return a + b;<br />
        }
    </code>
</pre>

'
author: 'cris-dux'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---

```javascript
// primera función
function sumar(a, b){
  return a + b;
}

// segunda función
const sumar = (a, b) => {
  return a + b;
}
```