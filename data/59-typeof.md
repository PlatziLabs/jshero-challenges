---
title: 'Explica este c贸digo JavaScript 馃槑'
createdAt: '2022-05-25T03:42:31.485Z'
answers: ['number', 'string', 'object', 'TypeError']
response: 0
explanation: 'Podemos convertir un <code>string</code> valido a <code>number</code> tan solo restandole <code>0</code>.
Es un hack interesante y una alternativa valida a usar el objeto <code>Number</code>, la funci贸n <code>parseInt</code> o el operador <code>+</code>.

<br /><br/>

El operador <code>-</code> solo cumple la tarea de realizar una resta en javascript, cuando se lo aplicamos a un <code>string</code> valido entonces el interprete tiene que convertir dicha cadena a <code>number</code> y luego realizar la operaci贸n, entonces nos aprovechamos de que el <code>0</code> es neutro aditivo para que la conversi贸n sea exitosa.

<br /><br/>

Si intentamos usar este hack con cadenas no num茅ricas la conversi贸n se realiza pero obtendremos un <code>NaN</code> como resultado, as铆 que mucho ojo con eso.

<br /><br/>

<pre>
    <code>
        console.log(typeof("aaa" - 0)); // number <br/>
        console.log(("aaa" - 0)); // NaN
    </code>
</pre>
'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---
```javascript
console.log(typeof("22" - 0))
```