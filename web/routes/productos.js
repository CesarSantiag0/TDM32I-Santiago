var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

/* GET Productos */
router.get('/', function(req, res, next) {
  db.query("SELECT * FROM tbproductos", function(err, resultado) {
    if (err) {
      console.log(err);
      res.status(500).send("Error al obtener los productos");
    } else {
      res.render('productos', { title: 'Productos disponibles', Libros: resultado });
    }
  });
});

module.exports = router;
