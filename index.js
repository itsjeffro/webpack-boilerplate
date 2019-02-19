const path = require('path');
const express = require('express');
const app = express();

const hostname = 'localhost';
const port = 3000;

app.use(express.static('build'));

app.get('/*', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, 'build/index.html'))
  } catch(e) {
    console.log(e.toString());
  }
});

app.listen(port, () => {
  console.log('Running on port ' + hostname + ':' + port);
});
