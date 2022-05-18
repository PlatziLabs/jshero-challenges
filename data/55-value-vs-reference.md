---
title: 'Explica este código JavaScript 😎'
createdAt: '2022-05-16T18:33:35.992Z'
answers: ['true, false, 15, 10', 'false, true, 10, 20', 'true, true, 15, 20', 'false, false, 20, 15']
response: 0
explanation: 'Al trabajar con objetos en javascript hay que difereciar 2 aspectos fundamentales: <strong>tener 2 referencias al mismo objeto</strong> y <strong>tener 2 objetos diferentes pero con las mismas propiedades</strong>.
<br/><br/>
Al crear <code>objeto1</code> estamos reservando un espacio en memoria para guardar dicho objeto.
Cuando asignamos <code>objeto1</code> a <code>objeto2</code> lo único que hacemos es que ambos objetos apunten a la misma dirección de memoria donde esta almacenado el <code>objeto1</code>. En otras palabras, tanto <code>objeto1</code> y <code>objeto2</code> no son independientes el uno del otro, si modificamos uno el otro también se vera afectado.
<br/><br/>
Como ambos apuntan a la misma dirección de memoria entonces al usar el operador débil de comparación <code>==</code> obtenemos <code>true</code>.
<br/><br/>
Pero si comparamos el <code>objeto1</code> contra el <code>objeto3</code> tendremos <code>false</code> puesto que si bien ambos tienen las mismas propiedades, estan almacenados en direcciones de memoria diferentes.
<br/><br/>
Para finalizar, cuando hacemos:
<br/><br/>
<pre>
    <code>
        objeto1.valor = 15;<br/>
        console.log(objeto2.valor);<br/>
        console.log(objeto3.valor);
    </code>
</pre>
<br/><br/>
Modificamos el valor de <code>objeto1</code> pero como apuntan a la misma dirección de momoria entonces también modificamos el valor del <code>objeto2</code> a <code>15</code>.
<br/><br/>
El <code>objeto3</code> no sufre ningún cambio.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---
```javascript
let objeto1 = { valor: 10 };
let objeto2 = objeto1;
let objeto3 = { valor: 10 };

console.log(objeto1 == objeto2);
console.log(objeto1 == objeto3);

objeto1.valor = 15;
console.log(objeto2.valor);
console.log(objeto3.valor);
```