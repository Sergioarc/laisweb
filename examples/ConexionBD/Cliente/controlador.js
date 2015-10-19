var mean = angular.module('mean',['ngRoute','ngCookies', 'ngMessages']);

mean.config(function($routerProvider, $locationProvider){
	$routeProvider.when("/",{
		templateUrl: "../views/index.ejs"
	}).when("/baseDatos/agregarUsuarios",{
		templateUrl: "../views/registro.ejs",
		controller: "conexionCtrl"
	}).otherwise({
		redirectTo:"/"
	});
});


mean.controller('conexionCtrl', function($scope, $http, $location){
	/*
	$http.post('/baseDatos/agregarUsuarios',{
		'nombre':$scope.nombre,
		'pass':$scope.pass
	}).
    success(function(data) {
    	console.log(data);
        
    }).error(function(data,status,headers,config){
    	alert("Ya existe ese usuario");
    });
    */
});