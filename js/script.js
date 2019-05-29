var Pokemon = angular.module("Pokemon",[])
// Modulo para mi pagina Web
Pokemon.controller("pokedex", function($rootScope,$scope,$http){
	$http({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/35/"
	}).then(function callbackSuccess(y){
		console.log(y);
	})
})