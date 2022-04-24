---
title: 'Explica este código JavaScript 🤔'
createdAt: '2022-04-24T04:32:39.854Z'
answers: [
    '["banana", "apple", "pear", "orange"]', 
    '[["banana", "apple"], "pear", "orange"]', 
    '["banana", "apple", ["pear"], "orange"]', 
    'SyntaxError']
response: 3
explanation: 'Cuando vemos en la lista de parámetros de una función la sintaxis de tres puntos <code>...</code> nos referimos a lo que se denomina un <strong>paramétro de tipo REST</strong>. En el cuerpo de la función este tipo de parámetro se trata como un arreglo pero siempre debe estar declarado al <strong>final</strong> de la lista de parámetros, caso contrario tendremos un error de sintaxis.

<br /><br/>

Si volvemos a escribir la función pero esta vez teniendo en cuenta lo anterior dicho:

<pre>
    <code>
        function getItems(fruitList, favoriteFruit, ...args) {<br /><br/>
            return [...fruitList, ...args, favoriteFruit]<br /><br/>
        }<br /><br/>

        console.log(getItems(["banana", "apple"], "pear", "orange"));
    </code>
</pre>

<br /><br/>

Obtemos por consola: <code>["banana", "apple", "orange", "pear"]</code>'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---
```javascript
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange"); //🤔?
```