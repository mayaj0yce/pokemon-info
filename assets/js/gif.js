// Adds an event listener to the searchButton
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', handleSearch);
//using the same as Maridon for ease and functionality

var pokemon = document.querySelector('poke-search');

var searchHandler = function (response) {
  if (response.ok) {
    response.json().then(function ())
  }
  event.preventDefault();

  var nameSearch = pokemon.value.trim();

  if (nameSearch) {

  }
}

function apiCard() {
  var apiUrl2 = 'https://api.pokemontcg.io/v2/cards?q=name:${pokemon}';

  fetch(apiUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(pokemon)
    })

}