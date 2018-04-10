document.addEventListener("DOMContentLoaded", function() {

  let allPokemon = []
  getPokemonData()
  let form = document.getElementById('pokemon-search-form')
  let pokemonContainer = document.getElementById('pokemon-container')
  form.addEventListener('submit', function(event){
    event.preventDefault()})

  let inputText = document.getElementById('pokemon-search-input')

  inputText.addEventListener('keyup', displayPokemon)

  pokemonContainer.addEventListener('click', flipCard)

  function getPokemonData(){
	  for (p of pokemonData.pokemons){
		let pokemon = new Pokemon(p.name, p.sprites.front, p.sprites.back)
		allPokemon.push(pokemon)
	  }
  }

  function displayPokemon(event){
  	pokemonContainer.innerHTML = ''
  	if (event.target.value != ''){
	  	let toDisplay = allPokemon.filter(pokemon => pokemon.name.includes(event.target.value))
	  	for (pokemon of toDisplay){
	  		pokemonContainer.innerHTML += pokemon.render()
	  	}
	}

  }

  function flipCard(e){
  	name = e.target.getAttribute('data-pokename')
  	if (name != 'null'){
	  	image = document.getElementById(`${name}-img`)
	  	current = image.getAttribute('src')

	  	if (current.includes('back')){
	  		image.setAttribute('src', current.replace('/back',''))
	  	} else{
	  		image.setAttribute('src', current.replace('pokemon/','pokemon/back/'))
	  	}
  	}
  }


})
