var mysql = require('mysql');
const { router } = require('../app');
var connection = mysql.createConnection({
//variables de conexion
host :'localhost',
user : 'root',
password :'',
database : 'ventas'
});

connection.connect(
    (err)=>{
        if(!err){
            console.log('Conexion exitosa');
        }else{
            console.log('Error de conexion');
        }
    }
);

module.exports = connection
//connection.query("SELECT * FROM tbproductos", function(err,resultado){
 //   console.log(resultado);
//});

//connection.end();

