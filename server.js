const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response');

const router = express.Router();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.use('/', express.static('public'));
router.get('/', (req, res) => {
  console.log(req.headers);
  res.header({
    'custom-header': 'Nuestro header personalizado',
  });
  res.status(200).send({
    body: 'Consulta exitosa',
  });
});
router.get('/message', (req, res) => {
  response.success(req, res, 'Este es el mensaje que buscas', 200);
});
router.post('/message', (req, res) =>
  response.success(req, res, 'Mensaje añadido.')
);
router.delete('/message', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.send('Mensaje ' + req.body.text + ' eliminado.');
});

// app.use('/', (req, res) => res.send('Hola!'));
app.use('/app', express.static('public'));
app.listen(3000);

console.log('La aplicación está escuchando en http://localhost:3000.');
