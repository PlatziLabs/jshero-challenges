---
title: '¿Cuál de las siguientes funciones es una Higher Order Function?'
createdAt: '2022-05-30T16:56:20.435Z'
answers: ['multiplicar', 'test', 'Ambas', 'Ninguna']
response: 2
explanation: 'Por definición una <strong>Higher Order Function</strong> es:
<br /><br/>
1. Una función que regresa otra función.
2. Una función que puede tener funciones en sus parámetros.
<br /><br/>
<code>multiplicar</code> aunque no lo parezca regresa otra función, podría escribirse también de la siguiente manera:
<br/> <br/>
<pre>
    <code>
        function multiplicar(a){<br/>
            return function(b){<br/>
                return a * b;<br/>
            }<br/>
        }
    </code>
</pre>
<br/> <br/>
Acá se observa mejor que <code>multiplicar</code> regresa una función anónima que realiza la operación del producto, es mucho más sencillo usar retornos implícitos para poder escribir lo mismo en una sola línea como en el ejemplo original.
<br/> <br/>
<code>test</code> recibe 2 parámetros, uno de ellos es una función que en el ejemplo es <code>console.log</code> de javascript nativo, esto es motivo suficiente para que sea considera una <strong>Higher Order Function</strong>.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'intermediate'
---
```javascript
//A
const multiplicar = a => b => a * b ;

//B
const test = (nombre, accion) => {
  return accion(nombre); 
}
console.log(test("Ana", console.log)); //Ana (por consola)
```