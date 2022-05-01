---
title: 'Explica este código JavaScript 😎'
createdAt: '2022-05-01T15:35:21.498Z'
answers: [
    'I have resolved!, second y I have resolved!, second', 
    'second, I have resolved! y second, I have resolved!', 
    'I have resolved!, second y second, I have resolved!', 
    'second, I have resolved! y I have resolved!, second']
response: 3
explanation: '<code>firstFunction</code> es una función simple que llama a <code>myPromise</code> usando el método <code>then</code> propio de las promesas. Por <strong>Event Loop</strong> las promesas pasan al <strong>Task Queue </strong> entonces primero ejecutamos el <code>console.log</code> y mostramos <code>second</code> por consola, ahora el <strong>Call Stack </strong> esta vacío y la promesa que estaba en la <strong>Task Queue</strong> pasa al Call Stack y resolvemos la promesa mostrando <code>'I have resolved!'</code>.

<br /><br />

<code>secondFunction</code> es una <strong>función asíncrona</strong>, al llamar a <code>myPromise</code> con <code>await</code> esperamos el tiempo necesario para que la promesa se ejecute, entonces mostramos primero por consola <code>'I have resolved!'</code> y luego <code>second</code>.

<br /><br />

Cuando tenemos sintaxis <code>async await</code> escribimos código de manera síncrona pero se ejecuta de manera asíncrona.

<br /><br />

Puedes aprender un poco más sobre asincronia en javascript en los siguientes videos:

<br /><br />

<a href="https://www.youtube.com/watch?v=7GeDNQRQy0Y&t=906s" target="_blank">Event Loop: Entender el asincronismo en JavaScript</a>

<br /><br />

<a href="https://www.youtube.com/watch?v=NkuJmzHXkQY" target="_blank">Asincronismo en JavaScript</a>
'
author: 'cristian-fernando-villca-gutie'
course: 'Curso de Asincronismo con JavaScript'
reference: 'https://platzi.com/cursos/asincronismo-js/'
level: 'advanced'
---
```javascript
const myPromise = () => Promise.resolve('I have resolved!')

function firstFunction() {
  myPromise().then(res => console.log(res))
  console.log('second')
}

async function secondFunction() {
  console.log(await myPromise())
  console.log('second')
}

firstFunction()
secondFunction()
```