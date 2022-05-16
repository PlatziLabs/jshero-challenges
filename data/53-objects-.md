---
title: 'Explica este código JavaScript 😎'
createdAt: '2022-05-16T17:56:27.964Z'
answers: ['false, false', 'true, false', 'false, true', 'undefined, true']
response: 1
explanation: 'Existe diferencias entre declarar la propiedad de un objeto como <code>undefined</code> o eliminarla con el operador unario <code>delete</code>.
<br /><br />
El objeto banda original no tiene la propiedad <code>vocalista</code>, pero lo agregamos con el valor <code>undefined</code>, entonces el objeto quedaria así:
<br /><br />

<pre>
    <code>
        const banda = {<br />
        id:1,<br />
        nombre: "Radiohead",<br />
        "tipo de musica": "Rock",<br />
        albunes: ["Pablo Honey", "Ok Computer", "In Rainbows"],<br />
        vocalista: undefined<br />
        };
    </code>
</pre>

<br /><br />

Pese a que el valor de <code>vocalista</code> es <code>undefined</code> la propiedad existe como tal dentro del objeto, es por ello que al verificarlo con el operador <code>in</code> obtenemos <code>true</code>.

<br /><br />

Algo diferente pasa cuando eliminamos con <code>delete</code> la propiedad <code>tipo de musica</code>, esta deja de existir en el objeto, no tiene ningún tipo de valor, ni siquiera <code>undefined</code>, el objeto quedaría así:

<br /><br />

<pre>
    <code>
        const banda = {<br />
        id:1,<br />
        nombre: "Radiohead",<br />
        albunes: ["Pablo Honey", "Ok Computer", "In Rainbows"],<br />
        vocalista: undefined<br />
        };
    </code>
</pre>
<br /><br />
Por ello al verificar nuevamente con <code>in</code> la existencia de una propiedad con la llave <code>tipo de musica</code> obtenemos <code>false</code>.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---
```javascript
const banda = {
  id:1,
  nombre: "Radiohead",
  "tipo de musica": "Rock",
  albunes: ["Pablo Honey", "Ok Computer", "In Rainbows"]
};

banda.vocalista = undefined;
console.log("vocalista" in banda);
delete banda["tipo de musica"];
console.log("tipo de musica" in banda);
```