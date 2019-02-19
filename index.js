const path = require('path');
const express = require('express');
const app = express();

const hostname = 'localhost';
const port = 3000;

app.use(express.static('public'));

app.get('/*', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/index.html'))
  } catch(e) {
    console.log(e.toString());
  }
});

app.listen(port, () => {
  console.log('Running on port ' + hostname + ':' + port);
});
