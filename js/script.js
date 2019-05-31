// Modulo Pokemon
var Pokemon = angular.module("Pokemon",[])
// Controller Pokedex
Pokemon.controller("Pokedex", function($rootScope,$scope,$http){
	// Diccionario
	$scope.PokedexB = [];
	// Ciclo for
	for (var i = 0; i < 100; i++) {
		$http({
			method: "GET",
			url: "https://pokeapi.co/api/v2/pokemon/"+i
		}).then(function callbackSuccess(y){
			$scope.PokedexB.push(y);
		})
	}
})