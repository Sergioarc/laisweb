var express = require('express');
var router = express.Router();

//Agregamos las librerias que necesitamos para la base de datos
//Todo.js es el esquema de la base de datos
var mongoose = require('mongoose');
var Todo = require('../db/models/Todo.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log("Hola mundo");
	Todo.find(function (err,todos){
		if(err) return next(err);
		res.json(todos);
	})
});

module.exports = router;
