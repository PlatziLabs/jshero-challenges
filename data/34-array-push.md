---
title: 'Explica este código JavaScript 😬'
createdAt: '2022-04-18T17:14:03.398Z'
answers: ['[1, 2, 3, 4, 5]', '[1, 2, 3, 5]', '[1, 2, 3, 4]', 'TypeError: newList.push is not a function']
response: 3
explanation: 'El método <code>push</code> regresa la longitud de un arreglo y no el arreglo en si mismo, podemos ver este comportamiento si hacemos lo siguiente:
<br/> <br/> 

<pre>
    <code>
        let newList = [1, 2, 3].push(4);<br/> <br/> 
        console.log(typeof newList); // number
    </code>
</pre>

<br/> <br/> 

Después de aplicar por primera vez el método <code>push</code>, <code>newList</code> ahora ya no es un arreglo, sino un primitivo de tipo <code>number</code> entonces cuando intentamos aplicar <code>push</code> por segunda vez tratamos de implementar un método propio de los arreglos a una variable de tipo <code>number</code>, es justo aqui donde salta el error.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de Manipulación de Arrays en JavaScript'
reference: 'https://platzi.com/clases/2461-arrays/40884-mutable-functions/'
level: 'intermediate'
---
```javascript
let newList = [1, 2, 3].push(4);
console.log(newList.push(5)); //🤔?
```