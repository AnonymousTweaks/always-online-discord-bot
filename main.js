//use this code after downloading express and discord.js to your project

const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Yo boi!!'))

app.listen(port, () =>
console.log(`all up and running`)
);
