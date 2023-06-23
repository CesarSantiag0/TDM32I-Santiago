var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

// POST para actualizar un producto
router.post('/:id', (req, res, next) => {
  //const { ID } = req.params
  const { titulo, imagen, descripcion, precio, ID } = req.body

  const query =
    'UPDATE tbproductos SET titulo = ?, imagen = ?, descripcion = ?, precio = ? WHERE ID = ?'
  const values = [titulo, imagen, descripcion, precio, ID]

  db.query(query, values, (err, results) => {
    if (err) throw error
    res.redirect('/productos')
  })
})

module.exports = router;
