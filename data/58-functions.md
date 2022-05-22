---
title: '58-functions'
createdAt: '2022-05-22T02:28:45.499Z'
answers: ['Asincrona', 'Declarativa', 'Expresiva', 'Clousure']
response: 1
explanation: '
En JavaScript tenemos dos tipos diferentes de funciones: Las <strong>Funciones Declarativas</strong> y las <strong>Funciones Expresivas.</strong>
<br /><br />

<strong>Funciones Declarativas:</strong>
Este tipo de funciones se caracteriza principalmente por el hecho de que son generadas haciendo uso de la palabra reservada <code>function</code> al inicio de la declaración.

<br />

     function saludar(nombre) {
         console.log(`Hola ${nombre}`);
         }
		 
    saludar('Platzi💚');

<br />

<strong>Funciones Expresivas:</strong>
A diferencia de las funciones de tipo declarativas, estas no requieren el uso de la palabra reservada <code>function</code> al inicio y, en cambio, son generadas a través de la asignación a una variable que albergará la función, estas funciones son creadas comúnmente como una función anónima, aunque también pueden llegar a ser nombradas.
<br />

     let  saludar = function(nombre) {
         console.log(`Hola ${nombre}`);
      }
		 
    saludar('Platzi💚')
<br />

<strong>Diferencias:</strong>
<br /><br />
- Las funciones declarativas se ven afectadas por el <strong>hoisting</strong> mientras que las expresivas no.
<br /><br />
- Las funciones declarativas pueden ser invocadas inclusive antes de ser declaradas en el orden secuencial del código, debido de igual manera al efecto ocasionado por el <strong>hoisting.</strong>
<br /><br />
- Contrario a lo anterior, una función expresiva únicamente puede ser invocada luego de haber sido generada en el orden lógico del código a causa de que esta no es afectada por el <strong>hoisting.</strong>
'
author: 'Sebastian-Pedroza'
course: 'Curso Básico de JavaScript'
reference: 'https://platzi.com/cursos/basico-javascript/'
level: 'basic'
---
```javascript
function sumar(a, b) {
	return a + b;
}

sumar(2,4);
```