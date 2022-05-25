---
title: 'Explica este código JavaScript 😎'
createdAt: '2022-05-18T16:56:58.944Z'
answers: ['0', '"0"', 'undefined', 'null']
response: 1 
explanation: 'El operador de corto circuito OR (||) solo se ejecuta si el primer operando es <code>falsy</code>.
El <strong>nullish coalescing operator</strong> (??) solo se ejecuta si el primer operando es <code>nullish</code> (<code>null</code> o <code>undefined</code>).

<br/> <br/>

Vamos paso por paso:

<br/> <br/>

<code>undefined || "0"</code>: <code>undefined</code> evalua como <code>falsy</code> entonces tendriamos <code>"0"</code>.
Nos quedaria el siguiente código:
<br/> <br/>
<pre>
    <code>
        console.log("0" || null || (undefined ?? 0))
    </code>
</pre>
<br/> <br/>

<code>"0" || null</code>: <code>"0"</code> no evalua como <code>falsy</code> entonces no se ejecuta el operador de corto circuito.
Nos quedaria el siguiente código:
<br/> <br/>
<pre>
    <code>
        console.log("0" || (undefined ?? 0))
    </code>
</pre>
<br/> <br/>

<code>undefined ?? 0</code>: Operando tenemos como resultado <code>0</code> por que <code>undefined</code> es un valor <code>nullish</code>.
Nos quedaria el siguiente código:
<br/> <br/>
<pre>
    <code>
        console.log("0" || 0)
    </code>
</pre>
<br/> <br/>

Finalmente <code>"0"</code> como cadena no es un valor <code>falsy</code> entonces no podemos ejecutar el operador de corto circuito dando como resultado final <code>"0"</code>.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---
```javascript
console.log(undefined || "0" || null || (undefined ?? 0))
```