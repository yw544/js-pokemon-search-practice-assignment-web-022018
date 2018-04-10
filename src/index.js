document.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById('pokemon-seach-form')
  form.addEventListener('submit', function(event){
    event.preventDefault()

    let inputText = document.getElementById('pokemon-name')
    addPokemon(inputText.value)
    inputText.value = ""
  })


	for (p of pokemonData.pokemons){
		pokemon = new Pokemon(p.name, p.sprites.front, p.sprites.back)
		console.log(pokemon)
	}

})
