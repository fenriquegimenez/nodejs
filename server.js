const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response');

const router = require('./components/messages/network');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.use('/app', express.static('public'));
app.listen(3000);

console.log('La aplicación está escuchando en http://localhost:3000.');
