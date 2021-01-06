const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.headers);
  res.send({
    error: '',
    body: 'Petición correcta',
  });
});

router.post('/', (req, res) => {
  res.send({
    error: '',
    body: 'Creado correctamente.',
  });
});
router.put('/', (req, res) => {
  res.send({
    error: '',
    body: 'Modificado correctamente.',
  });
});
router.delete('/', (req, res) => {
  res.send({
    error: '',
    body: 'Eliminado correctamente.',
  });
});

module.exports = router;
