var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

// GET Editar Producto
router.get('/:id/editar', function(req, res, next) {
    var idProducto = req.params.id;
    db.query("SELECT * FROM tbproductos WHERE ID = ?", [idProducto], function(err, resultado) {
        if (err) {
            console.log(err);
            res.status(500).send("Error al obtener el producto");
        } else if (resultado.length === 0) {
            res.status(404).send("Producto no encontrado");
        } else {
            res.render('editar', { title: 'Editar Producto', Producto: resultado[0] });
        }
    });
});

module.exports = router;
