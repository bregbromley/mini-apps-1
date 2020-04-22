const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');

app.use(express.static('public'));
app.use(bodyParser());

app.get('/', (req, res) => {
  console.log('get received');
  res.send('get received');
})

app.post('/', (req, res) => {
  console.log('post received');
  res.send('post received');
})


app.listen(port, () => console.log(`Server listening on port ${port}.......`));


