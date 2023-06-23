var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");


// POST para agregar un nuevo producto
router.post('/', function(req, res, next) {
    var idProducto = req.body.idProducto;
    var titulo = req.body.titulo;
    var imagen = req.body.imagen;
    var descripcion = req.body.descripcion;
    var precio = req.body.precio;

    // Insertar el nuevo producto en la base de datos
    db.query("INSERT INTO tbproductos (ID, titulo, imagen, descripcion, precio) VALUES (?, ?, ?, ?, ?)",
        [idProducto, titulo, imagen, descripcion, precio],
        function(err, resultado) {
            if (err) {
                console.error(err);
                res.render('agregar', { title: 'Crear Producto', error: 'Error al crear el producto' });
            } else {
                res.redirect('/productos'); // Redirigir a la página de productos después de agregar el producto
            }
        }
    );
});

module.exports = router;
