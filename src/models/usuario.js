'use strict'
const sequelize = require('sequelize');
module.exports = (sequelize, DataType)=>{
    const usuario = sequelize.define('usuario',{
        nombre : String,
        apellidos : String,
        usuario : String,
        correo : String,
        clave : String,
        rol : String,
        imagen : String
    },{
        classMethods: {
            tableName: 'usuario',
        },
    });
    return usuario;
};