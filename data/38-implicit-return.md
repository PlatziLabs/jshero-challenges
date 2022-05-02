---
title: 'Explica este código JavaScript 🤔'
createdAt: '2022-04-25T02:39:32.294Z'
answers: [
    '[1, [2, 3, 4]] y SyntaxError', 
    '[1, [2, 3, 4]] y { name: "Lydia", age: 21 }', 
    '[1, 2, 3, 4] y { name: "Lydia", age: 21 }', 
    'SyntaxError y { name: "Lydia", age: 21 }'
    ]
response: 0
explanation: '
<ul>
    <li>En la función <code>getList</code>:</li>
    <p>
        Tenemos una desestructuración de arreglos en la lista de parámetros de la función y además <code>y</code> es un parámetro de tipo <strong>REST</strong>.
        Por ende, al pasar el argumento <code>list</code>, <code>x</code> será igual al primer elemento del arreglo, ósea, <code>1</code>. <code>y</code> como es de tipo <strong>REST</strong> será un arreglo con todos los elementos restantes de <code>list</code>, ósea, <code>[2, 3, 4]</code>.
        La función regresa un nuevo arreglo <code>[x, y]</code>, entonces tendríamos un arreglo anidado y como resultado <code>[1, [2, 3, 4]]</code>.
    </p>
        <li>En la función <code>getUser</code>:</li>
    <p>
        Recibe un único parámetro <code>user</code> que es un objeto y luego lo regresa.
        Las funciones de tipo flecha tiene la característica denominada <strong>return implícito</strong> con esto se logra escribir funciones más compactas y de una sola línea, pero cuando intentamos usar un <strong>return implícito</strong> para devolver un objeto es <strong>obligatorio</strong> usar paréntesis para envolver al objeto en cuestión, sino hacemos esto el interprete nos arrojará un <code>SyntaxError</code>.
    </p>
</ul>

<br /><br/>

Para que el <strong>return implícito</strong> tenga sentido tendríamos que usar paréntesis para envolver el objeto:

<br /><br/>

<pre>
    <code>
        const getUser = user => ({ name: user.name, age: user.age })<br /><br/>
        const user = { name: "Lydia", age: 21 }<br /><br/>
        console.log(getUser(user)); // {name: "Lydia", age: 21}
    </code>
</pre>'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list)) 🤔?
console.log(getUser(user)) 🤔?
```