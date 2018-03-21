'use strict'
var app = require('./app');
var config = require('./src/config/config');
var port = 3900;

const Sequelize = require('sequelize');
const sequelize = new Sequelize('login_db', 'gabriel', 'gabriel', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

//Conexion a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conectado a la base datos correctamente.');
    //crear servidor
    app.listen(config.puerto, ()=>{
        console.log("Servidor en ejecucion en http://localhost:"+config.puerto);
        console.log(`
        ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
        █░░░░░░░░▀█▄▀▄▀██████░▀█▄▀▄▀██████                                    
        ░░░gab░░░░░░▀█▄█▄███▀░░░░▀█▄█▄███
            `);
    });
  })
  .catch(err => {
    console.error('Ha ocurido el siguiente error: ', err);
  });