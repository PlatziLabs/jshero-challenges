---
title: 'Explica este código JavaScript 😎'
createdAt: '2022-04-03T19:50:00.231Z'
answers: [
    '{ admin: true, user: { name: "Lydia", age: 21 } }', 
    '{ admin: true, name: "Lydia", age: 21 }', 
    '{ admin: true, user: ["Lydia", 21] }', 
    '{ admin: true }'
    ]
response: 1
explanation: '
    El <strong>spread operator</strong> en este ejemplo se encarga de propagar el objeto <code>user</code> dentro del objeto <code>admin</code>.

    <br /><br />

    Sin usar el <strong>spread operator</strong> tendríamos un objeto anidado:

    br /><br />

    <pre>
        <code>
            { admin: true, { name: "Lydia", age: 21 } }
        </code>
    </pre>

    <br /><br />

    Justamente el <strong>spread operator</strong> se encarga de expandir <code>user</code> para evitar el anidamiento.'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de ECMAScript 6+'
reference: 'https://platzi.com/cursos/ecmascript-6/'
level: 'basic'
---

```javascript
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin); //🤔?
```