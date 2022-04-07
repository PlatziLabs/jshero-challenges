---
title: 'Explica este código JavaScript 🧐'
createdAt: '2022-04-04T18:52:55.289Z'
answers: ['true, true, false', 'false, true, false', 'true, false, true', 'true, true, true']
response: 0
explanation: 'Primero, usamos el constructor <code>Number</code> para convertir 2 a <code>number</code>, como solo es una conversión de primitivos entonces el resultado es <code>true</code>.

<br /><br />

Segundo, usamos el constructor <code>Boolean</code> para convertir <code>false</code> a boleano, nuevamente solo es una conversión, entonces el resultado de la comparación es <code>true</code>.

<br /><br />

Tercero, ningún <code>Symbol</code> es igual a otro <code>Symbol</code>, por más que en el ejemplo tengan los mismos placeholders <code>foo</code>, nunca serán iguales. Entonces siempre nos dará <code>false</code>.

<br /><br />

No debemos confundir el contructor <code>Number</code> y <code>Boolean</code> por sí mismos, con dichos costructures acompañados de la palabra <code>new</code>, si hacemos lo siguiente:

<br /><br />

<pre>
    <code>
        const a = new Number(2);<br /><br />
        const b = new Boolean(true);
    </code>
</pre>

<br /><br />

Ambas variables serán objetos creados por medio de estos contructores, y no solo conversiones como en el ejercicio principal de este reto.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---

```javascript
console.log(Number(2) === Number(2)); //🤔?
console.log(Boolean(false) === Boolean(false)); //🤔?
console.log(Symbol('foo') === Symbol('foo')); //🤔?
```

