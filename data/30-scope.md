---
title: 'Explica este cรณdigo JavaScript ๐'
createdAt: '2022-04-18T15:47:08.381Z'
answers: ['๐ฅ', '๐', '๐', 'ReferenceError']
response: 0
explanation: 'Al llamar a <code>getStatus</code> debemos tener el cuenta el scope de las variables, recuerda que tanto <code>let</code> como <code>const</code> tienen scope de bloque, por ende buscara una variable status dentro del bloque de <code>data</code> y regresara el emoji de palta.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---
```javascript
var status = "๐"

setTimeout(() => {
  const status = "๐"

  const data = {
    status: "๐ฅ",
    getStatus() {
      return this.status
    }
  }
  console.log(data.getStatus())
}, 0)
```