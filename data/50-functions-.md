---
title: 'Explica este código JavaScript'
createdAt: '2022-05-09T12:26:32.997Z'
answers: ['number', 'object', 'string', 'TypeError']
response: 2
explanation: 'La función <code>sayHi</code> regresa una otra función de tipo flecha, dicha función es anónima y solo devuelve la cadena <code>Hi JavaScript</code>, el detalle acá es que esta función anónima una vez regresada es inmediatamente llamada.
<br /><br />
Entonces <code>sayHi</code> será igual a la cadena <code>Hi Javascript</code> y en conclusión su <code>typeof</code> igual a <code>string</code>.
<br /><br />
Podriamos ver también este ejemplo si extraemos la función anónima y escribimos en una función auxiliar por aparte, de la siguente manera:
<br /><br />
<pre>
    <code>
        const aux = () => {<br />
        return "Hi Javascript!"<br />
        }<br />

        const sayHi = () => {<br />
        return aux();<br />
        }<br />

        console.log(typeof sayHi()); // string
    </code>
</pre>
'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---
```javascript
const sayHi = () => {
  return (() =>"Hi Javascript!")();
}

console.log(typeof sayHi());
```