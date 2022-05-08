---
title: '47-arrays-objects'
createdAt: '2022-05-08T02:23:10.142Z'
answers: [
    '['🍕', '🍫', '🥑', '🍔']', 
    '['🍝', '🍫', '🥑', '🍔']', 
    '['🍝', '🍕', '🍫', '🥑', '🍔']', 
    'ReferenceError']
response: 0
explanation: 'Tenemos un arreglo <code>food</code> y un objeto <code>info</code> independiente uno del otro.

<code>info</code> solo tiene la propiedad <code>favoriteFood</code> que apunta al índice 0 del arreglo <code>food</code>, por lo tanto <code>info</code> seria igual a:

<br /> <br />

<pre>
    <code>
        const info = { favoriteFood:'🍕'}
    </code>
</pre>

<br /> <br />

Posteriormente pisamos o sobre escribimos este valor modifiando el emoji de pizza por uno de spaguetti:

<br /> <br />

<pre>
    <code>
        info.favoriteFood = '🍝'
    </code>
</pre>

<br /> <br />


Ahora <code>info</code> se ve así:

<br /> <br />

<pre>
    <code>
        const info = { favoriteFood:'🍝'}
    </code>
</pre>

<br /> <br />

En ningún momento modificamos de ninguna manera el array <code>food</code>, por ende sigue siendo el mismo: <code>['🍕', '🍫', '🥑', '🍔']</code>
'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de Manipulación de Arrays en JavaScript'
reference: 'https://platzi.com/clases/2461-arrays/40876-reduce/'
level: 'basic'
---
```javascript
const food = ['🍕', '🍫', '🥑', '🍔']
const info = { favoriteFood: food[0] }

info.favoriteFood = '🍝'

console.log(food)
```