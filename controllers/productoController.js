'use strict'
var Producto = require('../models/producto');

function productoHome(req, res){
    console.log("Usuario de Productos");
    console.log(req.usuario)  
    res.status(200).send({
        mensaje: 'hola desde el controlar de producto'
    });
}
function nuevoProducto(req, res){
    var params = req.body;  
}

module.exports={
    productoHome,
}