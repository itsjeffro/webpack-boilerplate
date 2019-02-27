const path = require('path');
const express = require('express');
const app = express();

require('dotenv').config();

const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

app.use(express.static('build'));

app.get('/*', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, 'build/index.html'))
  } catch(e) {
    console.log(e.toString());
  }
});

const server = app.listen(port, () => {
  console.log('Running on port ' + server.address().address + ':' + port);
});