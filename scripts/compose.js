const readline = require('readline');
const fs = require('fs');

const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

console.info('Welcome to command line interface to creating new challenge!\n');

const postData = {};
let finish = false;

rl.question('Challenge title: ', (answer) => {
  postData['title'] = answer;
  rl.close();
});

rl.on('close', () => {
  const now = new Date();
  const slug = textToSlug(postData.title);

  postData['fileName'] = `${slug}.md`;
  postData['date'] = now.toISOString();

  try {
    fs.statSync(`data/${postData.fileName}`);
    console.error('\nError!: The challenge has already been created');
  } catch (err) {
    fs.writeFileSync(
      `data/${postData.fileName}`,
      `---
title: '${postData.title}'
createdAt: '${postData.date}'
answers: ['', '', '', '']
response:
explanation:
author:
course:
reference:
level:
---`
    );
    console.info(`\nSuccess!!: data/${postData.fileName} was created`);
  }
});

rl.on('SIGINT', () => rl.pause());

rl.on('pause', () => {
  if (!finish) console.log('\n New challenge created!');
});

const textToSlug = (text) => {
  return encodeURI(
    text
      .replace(/Á/gi, 'a')
      .replace(/É/gi, 'e')
      .replace(/Í/gi, 'i')
      .replace(/Ó/gi, 'o')
      .replace(/Ú/gi, 'u')
      .replace(/À/gi, 'a')
      .replace(/È/gi, 'e')
      .replace(/Ì/gi, 'i')
      .replace(/Ò/gi, 'o')
      .replace(/Ù/gi, 'u')
      .replace(/ñ/gi, 'n')
      .replace(/\?/gi, '')
      .replace(/¿/gi, '')
      .replace(/!/gi, '')
      .replace(/¡/gi, '')
      .replace(/ /g, '-')
      .toLowerCase()
      .substr(0, 39)
  );
};
