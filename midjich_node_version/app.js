const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/public', express.static('public'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
 res.render('index');
});

server.listen(port);
