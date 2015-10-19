var express = require('express');
var router = express.Router();

//Agregamos las librerias que necesitamos para la base de datos
//Todo.js es el esquema de la base de datos
var mongoose = require('mongoose');
var Todo = require('../db/models/Todo.js');

/* GET users listing. */
router.get('/usuarios', function(req, res, next) {
	console.log("Hola mundo");
	Todo.find(function (err,usuarios){
		if(err) return next(err);
		res.json(usuarios);
	});
});

/*Pagina de registro*/
router.get('/agregarUsuarios',function(req,res,next){
	res.render('registrar');
});

/* POST users*/ 
router.post('/agregarUsuarios',function(req,res,next){
	console.log("Cuerpo");
	console.log(req.body);
	Todo.create(req.body, function(err, post){
		if (err){ 
			console.log(err);
		}
		console.log("creado");
		res.render("registrar");	
	});
});

module.exports = router;