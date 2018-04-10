document.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById('pokemon-search-form')
  form.addEventListener('submit', function(event){
    event.preventDefault()})

  inputText.addEventListener('keypress', function(event){
    let inputText = document.getElementById('pokemon-name')
    displayPokemon(inputText.value)
  })

	for (p of pokemonData.pokemons){
		pokemon = new Pokemon(p.name, p.sprites.front, p.sprites.back)
		console.log(pokemon)
	}

})
