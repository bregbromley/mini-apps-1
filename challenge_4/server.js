const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('client/dist');
app.use(bodyParser);

app.get('/', (req, res) => {

})

app.post('/', (req, res) => {

})

app.listen(port, () => console.log(`Server listening on ${port}....`))