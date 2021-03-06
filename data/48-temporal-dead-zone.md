---
title: 'Explica este c贸digo JavaScript 馃槵'
createdAt: '2022-05-08T02:36:07.291Z'
answers: ['Lydia', 'Sarah', 'undefined', 'ReferenceError']
response: 3
explanation:'Las variables declaradas con <code>let</code> y <code>const</code> tienen <strong>scope de bloque</strong> es por este motivo que si bien tenemos 2 variables con el nombre <code>name</code>, ambas son diferentes e independientes en sus respectivos scopes.

<br/> <br/>

La funci贸n <code>getName</code> intenta imprimir por consola <code>name</code> antes de ser declarada, por hoisting el interprete de javascript har谩 que <code>name</code> entre en lo que se denomina <strong>Temporal Dead Zone</strong>, una regi贸n del c贸digo donde la variable esta declarada pero no es posible acceder a ella.

<br/> <br/>

Todo esto producir谩 un <code>ReferenceError</code>.

<br/> <br/>

Si dentro de la funci贸n <code>getName</code> la variable <code>name</code> estuviera declara con <code>var</code>:

<br/> <br/>

<pre>
    <code>
        function getName() {<br/>
        console.log(name)<br/>
        var name = 'Sarah'<br/>
        }
    </code>
</pre>

<br/> <br/>

Por <strong>hoisting</strong> el resultado ser铆a <code>undefined</code> puesto que la <strong>Temporal Dead Zone</strong> solo existe con variables declaradas con <code>let</code> y <code>const</code>.
'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'advanced'
---
```javascript
let name = 'Lydia'

function getName() {
  console.log(name)
  let name = 'Sarah'
}

getName()
```