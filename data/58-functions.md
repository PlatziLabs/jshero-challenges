---
title: '馃殌El siguiente c贸digo hace referencia a una funci贸n de tipo:'
createdAt: '2022-05-22T02:28:45.499Z'
answers: ['Asincrona', 'Declarativa', 'Expresiva', 'Clousure']
response: 1
explanation: '
En JavaScript tenemos dos tipos diferentes de funciones:聽Las <strong>Funciones聽Declarativas</strong> y las <strong>Funciones Expresivas.</strong>
<br /><br />

<strong>Funciones Declarativas:</strong>
Este tipo de funciones se caracteriza principalmente por el hecho de que son generadas haciendo uso de la palabra reservada <code>function</code> al inicio de la declaraci贸n.

<br />

     function saludar(nombre) {
         console.log(`Hola ${nombre}`);
         }
		 
    saludar('Platzi馃挌');

<br />

<strong>Funciones Expresivas:</strong>
A diferencia de las funciones de tipo declarativas, estas no requieren el uso de la palabra reservada <code>function</code> al inicio y, en cambio, son generadas a trav茅s de la asignaci贸n a una variable que albergar谩 la funci贸n, estas funciones son creadas com煤nmente como una聽funci贸n an贸nima, aunque tambi茅n pueden llegar a ser nombradas.
<br />

     let  saludar = function(nombre) {
         console.log(`Hola ${nombre}`);
      }
		 
    saludar('Platzi馃挌')
<br />

<strong>Diferencias:</strong>
<br /><br />
- Las funciones declarativas se ven afectadas por el <strong>hoisting</strong> mientras que las expresivas no.
<br /><br />
- Las funciones declarativas pueden ser invocadas inclusive antes de ser declaradas en el orden secuencial del c贸digo, debido de igual manera al efecto ocasionado por el <strong>hoisting.</strong>
<br /><br />
- Contrario a lo anterior, una funci贸n expresiva 煤nicamente puede ser invocada luego de haber sido generada en el orden l贸gico del c贸digo a causa de que esta no es afectada por el <strong>hoisting.</strong>
'
author: 'Sebastian-Pedroza'
course: 'Curso B谩sico de JavaScript'
reference: 'https://platzi.com/cursos/basico-javascript/'
level: 'basic'
---
```javascript
function sumar(a, b) {
	return a + b;
}

sumar(2,4);
```