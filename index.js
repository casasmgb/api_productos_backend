'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.Promise = global.Promise;

//Conexion a la base de datos
mongoose.connect('mongodb://localhost:27017/db_comercio', {})
.then(()=>{
    console.log("Conectado a la base de datos...");
    //crear servidor
    app.listen(port, ()=>{
        console.log("Servidor en ejecucion en http://localhost:3900");
    });
}).catch(err=>console.log(err));
