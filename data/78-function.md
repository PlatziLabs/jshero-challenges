---
title: 'Explica este código JavaScript'
createdAt: '2022-06-12T17:39:05.756Z'
answers: [
    '4, "2true", 2', 
    '4, 3, Error: falta de parametros', 
    '"22", "3true", "20"', 
    '4, 3, 2'
    ]
response: 1 
explanation: '<strong>Primer caso</strong>:
Simple suma de números enteros.
<br /> <br />
<strong>Segundo caso</strong>:
Por inferencia de tipos, el parámetro <code>true</code> se convierte en <code>1</code>, por ello el resultado es <code>3</code>.
<br /> <br />
<strong>Tercer caso</strong>:
En el <code>if</code> usamos el operador de negación para la validación de parámetros, esto hace que los valores falsy también se vean afectados y nos arroje la excepción. Para arreglar esto podríamos hacer lo siguiente:
<br /> <br />
<code>
    const sumar = (a,b) => {<br />
    if(a === undefined || b === undefined){<br />
        throw new Error("faltan parametros");<br />
    }<br />
    return a + b;<br />
    }
</code>
<br /> <br />
O una solucuón un poco más elegante:
<br /> <br />
<code>
    const sumar = (a, b) => {<br />
    if ([a,b].includes(undefined)) {<br />
        throw new Error("faltan parametros");<br />
    }<br />
    return a + b;<br />
    }
</code>
<br /> <br />
De esa manera no solo cuando alguno de los parámetros no este definido en la llamada de la función se lanza la excepción.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'advanced'
---
```javascript
const sumar = (a,b) => {
  if(!a || !b){
    throw new Error("faltan parametros");
  }
  return a + b;
}

console.log(sumar(2,2));
console.log(sumar(2,true));
console.log(sumar(2,0));
```