---
title: 'Explica este código JavaScript 🤔'
createdAt: '2022-04-01T20:59:58.766Z'
answers: ['[]', '[null, null, null]', '[undefined, undefined, undefined]', '[ 3 huecos vacíos ]']
response: 2
explanation: 'El método `map` es propio del paradigma de la programación funcional. Este método siempre retorna una nuevo arreglo.

<br /><br />

En el ejemplo, puesto que estamos iterando sobre un arreglo de números, la condición evaluaerá `true` para cada uno de los elementos del arreglo, pero hay 2 sentencias `return`. JavaScript ignora todo el código que esta después del primer `return` que encuntra. Dicho esto, tendríamos algo así:

<br /><br />

<code>
    [1, 2, 3].map(num => {
    if (typeof num === "number") return;
    });
</code>

<br /><br />

Ahora, si bien la condición se evalua a `true`, el `return` no devuelve nada, simplemente hace que el código se salga del `map`.

<br /><br />

Cuando no devolvemos nada en `return`, `map` regresa siempre `undefined`.

<br /><br />

Al tener 3 elementos en el arreglo, y recordando siempre que map regresa un nuevo arreglo, obtenemos como resultado final un arreglo de 3 `undefined`'
author: 'cris-dux'
course: 'Curso de Manipulación de Arrays en JavaScript'
reference: 'https://platzi.com/clases/2461-arrays/40884-mutable-functions/'
level: basic
---

```javascript
[1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
});
```