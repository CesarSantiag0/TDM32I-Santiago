var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require('./routes/productos');
var editarRouter = require('./routes/editar');
var actualizarRouter = require('./routes/actualizar');
var eliminarRouter = require('./routes/eliminar');
var agregarRouter = require('./routes/agregar');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Llamado de la rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter);
app.use('/editar', editarRouter);
app.use('/actualizar', actualizarRouter);
app.use('/eliminar' , eliminarRouter);
app.use('/agregar' , agregarRouter);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  next(createError(404));
//});
app.get('/agregar', function(req, res) {
  res.render('agregar', { title: 'Agregar Producto', Producto: {} });
});

app.get('/actualizar', function(req, res, next) {
  var idProducto = req.params.id;var express = require('express');
  var router = express.Router();
  var db = require("../conexion/conexion");
  
  
  // PUT Actualizar Producto
  router.post('/:id', (req, res, next) => {
  
    //const { ID } = req.params
  
    const { titulo, imagen, descripcion, precio, ID } = req.body
  
  
  
  
    const query =
  
      'UPDATE tbproductos SET titulo = ?, imagen = ?, descripcion = ?, precio = ? WHERE ID = ?'
  
    const values = [titulo, imagen, descripcion, precio, ID]
  
  
  
  
    connection.query(query, values, (err, results) => {
  
      if (err) throw error
  
      res.redirect('/productos')
  
    })
  
  })
  
  /*// GET para la ruta '/actualizar'
  router.get('/:id', function(req, res, next) {
    var idProducto = req.params.id;
    // Código para obtener los datos del producto a actualizar
    // ...
    res.render('actualizar', { title: 'Actualizar Producto', producto: productoObtenido });
  });*/
  
  module.exports = router;
  
  var productoActualizado = {
    titulo: req.body.titulo,
    imagen: req.body.imagen,
    descripcion: req.body.descripcion,
    precio: req.body.precio
  };
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  
// Iniciar el servidor
app.listen(3000, function() {
  console.log('Servidor iniciado en el puerto 3000');
});
});

module.exports = app;
