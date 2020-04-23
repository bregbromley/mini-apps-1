const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');
const db = require('./db');
const models = require('./model')

app.use(express.static('public'));
app.use(bodyParser());

app.get('/', (req, res) => {
  console.log('get received');
  res.send('get received');
})

// app.post('/', (req, res) => {
//   console.log('post received');
//   res.send('post received');
// })

app.post('/userdata', (req, res) => {
  console.log(req.boyd);
  var params = [
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.line1,
    req.body.line2,
    req.body.city,
    req.body.state,
    req.body.zip,
    req.body.card,
    req.body.exp,
    req.body.cvv,
    req.body.bzip
  ]
  models.userdata.post(params, function(err, results) {
    if (err) {
      console.log('ERROR:', err)
    }
    res.end('COMPLETE')
  })
})

app.listen(port, () => console.log(`Server listening on port ${port}.......`));


