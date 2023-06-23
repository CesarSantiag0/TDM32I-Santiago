var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

// DELETE Eliminar Producto
router.post('/:id', function(req, res, next) {
  var idProducto = req.params.id;
  db.query("DELETE FROM tbproductos WHERE ID = ?", [idProducto], function(err, resultado) {
    if (err) {
      console.log(err);
      res.status(500).send("Error al eliminar el producto");
    } else if (resultado.affectedRows === 0) {
      res.status(404).send("Producto no encontrado");
    } else {
      res.redirect('/productos')
    }
  });
});

module.exports = router;
