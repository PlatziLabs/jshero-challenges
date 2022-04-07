---
title: 'Explica este código JavaScript 😎'
createdAt: '2022-04-07T22:10:53.934Z'
answers: ['['apple', 'banana']', '2', 'true', 'undefined']
response: 1
explanation: 'El método <code>push</code> regresa la longitud del arreglo. Inicialmente el arreglo <code>["banana"]</code> tiene langitud 1, al hacer el <code>push</code> del item apple la longitud será de 2 y ojo, no hacemos un <code>return</code> de <code>list</code> sino de <code>list.push(item)</code> por ello regresamos la longitud que es 2.

<br /><br />

Si quisieramos regresar el arreglo resultante completo deberiamos hacer:

<br /><br />

<pre>
    <code>
        function addToList(item, list) { <br /><br />
            list.push(item); <br /><br />
            return list; // ["banana","apple"] <br /><br />
        }
    </code>
</pre>

'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---

```javascript
function addToList(item, list) {
  return list.push(item);
}
const result = addToList("apple", ["banana"]);
console.log(result);
```