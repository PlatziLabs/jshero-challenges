---
title: 'Explica este código JavaScript'
createdAt: '2022-06-12T16:38:30.698Z'
answers: [
    '[1, 2, 3, 4, 5, 6]', 
    '[1, 2, 3, [4, 5, 6]]', 
    '"1, 2, 3, 4, 5, 6"', 
    '"1, 2, 34, 5, 6"']
response: 3
explanation: 'Los operadores de javascript, como por ejemplo el operador suma <code>(+)</code>, están diseñados para tipos de datos primitivos, especialmente para cadenas de caracteres y números.
<br /> <br />
Cuando intentamos usar dichos operadores para tipos no primitivos, javascript hará su mayor esfuerzo para devolver un resultado lógico, pero la mayoría de las veces obtendremos salidas no esperadas o ambiguas.
<br /> <br />
Lo primero que tratará de hacer el interprete de javascript es tratar de convertir los arreglos a cadenas, aunque no lo veamos hará algo como esto:
<code>
    const a = [1, 2, 3];<br/>
    let b = [4, 5, 6];<br/>
    console.log(a.toString() + b.toString()); //"1, 2, 3" + "4, 5, 6"
</code>
<br /> <br/>
La operación de "suma de arreglos" al final se convierte en una concatenación de cadenas. Esto explica el loco resultado que nos muestra por consola.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
const a = [1, 2, 3];
let b = [4, 5, 6];
console.log(a + b); //?
```