---
title: 'Explica este cΓ³digo JavaScript π¬'
createdAt: '2022-05-08T02:23:10.142Z'
answers: [
    '['π', 'π«', 'π₯', 'π']', 
    '['π', 'π«', 'π₯', 'π']', 
    '['π', 'π', 'π«', 'π₯', 'π']', 
    'ReferenceError']
response: 0
explanation: 'Tenemos un arreglo <code>food</code> y un objeto <code>info</code> independiente uno del otro.

<code>info</code> solo tiene la propiedad <code>favoriteFood</code> que apunta al Γ­ndice 0 del arreglo <code>food</code>, por lo tanto <code>info</code> seria igual a:

<br /> <br />

<pre>
    <code>
        const info = { favoriteFood:'π'}
    </code>
</pre>

<br /> <br />

Posteriormente pisamos o sobre escribimos este valor modifiando el emoji de pizza por uno de spaguetti:

<br /> <br />

<pre>
    <code>
        info.favoriteFood = 'π'
    </code>
</pre>

<br /> <br />


Ahora <code>info</code> se ve asΓ­:

<br /> <br />

<pre>
    <code>
        const info = { favoriteFood:'π'}
    </code>
</pre>

<br /> <br />

En ningΓΊn momento modificamos de ninguna manera el array <code>food</code>, por ende sigue siendo el mismo: <code>['π', 'π«', 'π₯', 'π']</code>
'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ManipulaciΓ³n de Arrays en JavaScript'
reference: 'https://platzi.com/clases/2461-arrays/40876-reduce/'
level: 'basic'
---
```javascript
const food = ['π', 'π«', 'π₯', 'π']
const info = { favoriteFood: food[0] }

info.favoriteFood = 'π'

console.log(food)
```