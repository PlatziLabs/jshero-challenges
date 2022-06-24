---
title: '¿Qué mensaje se imprimirá primero en el siguiente código?'
createdAt: '2022-06-24T18:38:59.693Z'
answers: ['Está es una promesa resuelta', 'Esté es un callback resuelto',]
response: 1
explanation: Las microtask (las promesas son microtask) siempre se resolverán en su totalidad antes de pasar a resolver las promesas.
author: hecttoressau
course:
reference: https://blog.insiderattack.net/javascript-event-loop-vs-node-js-event-loop-aea2b1b85f5c
level: básico
---
setTimeout(() => console.log('Esté es un callback resuelto'), 0);
Promise.resolve().then(() => console.log('Está es una promesa resuleta'));
