// Adds an event listener to the searchButton
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', handleSearch);
//using the same as Maridon for ease and functionality

var pokemon = document.querySelector('poke-search');

var searchHandler = function (response) {
  if (response.ok) {
    response.json().then(function (data) {
      displayCard(data, )
    })
  }
  event.preventDefault();

  var nameSearch = pokemon.value.trim();

  if (nameSearch) {

  }
}

function apiCard() {
  var apiUrl2 = 'https://api.pokemontcg.io/v2/cards?q=name:' + ;

  fetch(apiUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(pokemon)
    })

}

// gif from pokeAPI 
async function getPokemonInfo(pokemon) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const pokemonGif = data.name;
   
    return {
      name: pokemonName,
     sprite: pokemonGif
      };
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
