'use strict'
var express = require('express');
var productoController = require('../controllers/productoController');
var md_autenticar=require('../middlewares/autenticar');
 var api = express.Router();

 api.get('/homeProducto', md_autenticar.authSeguro,productoController.productoHome);

 module.exports = api;