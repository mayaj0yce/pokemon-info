var pokemon = document.querySelector('poke-search');

var searchHandler = function (event) {
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