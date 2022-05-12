---
title: 'Explica este código JavaScript'
createdAt: '2022-05-09T11:40:12.497Z'
answers: ['I love to program', 'undefined to program', '${(x => x)('I love') to program', 'TypeError']
response: 0
explanation: 'Al usar los backtiks de ES6, las expresiones se evaluan primero.

<br />

En este caso la expresión completa es:

<br /><br />
<pre>
    <code>
        ${(x => x)('I love')}
    </code>
</pre>
<br /><br />

Donde:
<br /><br />
<code>(x => x)</code> es una función anónima de tipo flecha, que recibe un parámetro <code>x</code> y con un <strong>return implícito</strong> lo devuelve.
<br /><br />
<code>('I love')</code> es la llamada a la función anónima, acá pasamos como argumento a la función la cadena <code>I love</code>.
<br /><br />
Entonces, la función es llamada y regresa únicamente el parámetro que se le pasa. Por ello la respuesta es <code>I love to program</code>.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```jsvascript
console.log(`${(x => x)('I love')} to program`)
```