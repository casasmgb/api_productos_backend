'use strict'
var mongoose = require('mongoose');
var Esquema = mongoose.Schema;
var productoEsquema = ({
    nombre : String,
    detalle : String,
    precioBOB : String,
    categoria :  String,
    estado : String,
    imagen : String,
    usuario : String,
});

module.exports=mongoose.model('Producto', productoEsquema);