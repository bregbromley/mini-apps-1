const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const fs = require('fs');
var path = require('path');

app.use(express.static('client'));
app.use(bodyParser());
// app.use(express.urlencoded());

app.get('/', (req, res) => {
  console.log('get ran');
  res.send('Hello World');
})


app.post('/upload_JSON', (req, res) => {
  console.log('req.body:', req.body);
  console.log(req.body.filename);
  fs.readFile(__dirname + `/samples/${req.body.filename}`, "utf8", (err, data) => {
    if (err) {
      console.log('ERROR:', err)
      res.status(500).send(err);
    } else {
      var resData= JSON.parse(data);
      console.log('resData', resData);
      fs.writeFile(path.join(__dirname, 'data', 'csv_report.csv'), jsonToCSV(resData), (err) => {
        if (err) {
          console.log('ERROR:', err);
          res.status(400).send();
        } else {
          fs.readFile(path.join(__dirname, 'data', 'csv_report.csv'), (err, fileData) => {
            if (err) {
              res.status(400).send();
            } else {
              res.sendFile(path.join(__dirname, 'data', 'csv_report.csv'))
            }
          } )
        }
      })
    }
  })
})

// app.post('/upload_JSON', (req, res) => {
//   var input = req.body.input;
//   console.log('RAN');
//   console.log(console.log(req.body));
//   var data = jsonToCSV(JSON.parse(input));
//   console.log(__dirname);
//   fs.writeFile(path.join(__dirname, 'data', 'csv_report.csv'), data, (err) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send();
//     } else {
//       fs.readFile(path.join(__dirname, 'data', 'csv_report.csv'), (err, fileData) => {
//         if (err) {
//           res.status(400).send();
//         } else {
//           // res.send(fileData.toString());
//           res.sendFile(path.join(__dirname, 'data', 'csv_report.csv'));
//         }
//       })
//       // res.sendFile(path.join(__dirname, 'data', 'csv_report.csv'));
//     }
//   })
// })


// app.post('/upload_JSON', (req, res) => {
//   console.log(req.body);
//   var input = req.body.input;
//   var data = jsonToCSV(JSON.parse(input));
//   console.log();
//   console.log('post ran');
//   res.send(data);
// })

app.listen(port, () => console.log(`CSV Server listening at http://localhost:${port}`));


var jsonToCSV = function(obj) {
  console.log("obj:", obj);
  var result = '';

  var objKeys = Object.keys(obj);
  objKeys.pop();
  var objKeyStr = objKeys.join(',')
  objKeyStr += '\n';
  result += objKeyStr;
  // console.log(objKeyStr);
  var line1 = '';
  var helper = function(obj) {
    for (var key in obj) {
    if (key !== 'children') {
      line1 += `${obj[key]},`
    } else {
      line1 = line1.substring(0, line1.length -1);
      line1 += '\n';
      obj[key].forEach(child => helper(child));
    }
  }
  }
  helper(obj);
  result += line1;
  return result;
}

