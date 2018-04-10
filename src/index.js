document.addEventListener("DOMContentLoaded", function() {


	for (p of pokemonData.pokemons){
		pokemon = new Pokemon(p.name, p.sprites.front, p.sprites.back)
		console.log(pokemon)
	}

})
