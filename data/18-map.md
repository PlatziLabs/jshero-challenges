---
title: 'Explica este c贸digo JavaScript 馃'
createdAt: '2022-04-01T20:59:58.766Z'
answers: ['[]', '[null, null, null]', '[undefined, undefined, undefined]', '[ 3 huecos vac铆os ]']
response: 2
explanation: 'El m茅todo map es propio del paradigma de la programaci贸n funcional. Este m茅todo siempre retorna una nuevo arreglo.

<br /><br />

En el ejemplo, puesto que estamos iterando sobre un arreglo de n煤meros, la condici贸n evaluaer谩 true para cada uno de los elementos del arreglo, pero hay 2 sentencias return. JavaScript ignora todo el c贸digo que esta despu茅s del primer return que encuntra. Dicho esto, tendr铆amos algo as铆:

<br /><br />

<pre>
  <code>
    [1, 2, 3].map(num => {<br />
    if (typeof num === "number") return;<br />
    });
  </code>
</pre>

<br /><br />

Ahora, si bien la condici贸n se evalua a true, el return no devuelve nada, simplemente hace que el c贸digo se salga del map.

<br /><br />

Cuando no devolvemos nada en return, map regresa siempre undefined.

<br /><br />

Al tener 3 elementos en el arreglo, y recordando siempre que map regresa un nuevo arreglo, obtenemos como resultado final un arreglo de 3 undefined'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de Manipulaci贸n de Arrays en JavaScript'
reference: 'https://platzi.com/clases/2461-arrays/40884-mutable-functions/'
level: basic
---

```javascript
[1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
});
```