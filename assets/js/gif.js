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
const image = 'https:' + $('a[href*="/wiki/File:"] > img').attr("src");
// 7964debe-a160-40e6-8cc3-7f21841c780f api key
var https://api.pokemontcg.io/v2/cards{APIKEY}
  function gifImage() {
    fetch(requestUrl2)

      .then()
      .then()
  }

// const image = 'https:' + $('a[href*="/wiki/File:"] > img').attr("src");

// // 7964debe-a160-40e6-8cc3-7f21841c780f api key
// var requestUrl2 =  https://api.pokemontcg.io/v2/cards{APIKEY}
// function gifImage() {
// fetch (requestUrl2)

// .then() json
// .then()
// }

fetch("api.pokemontcg.io/v2/cards", {
  "method": "GET",
  "headers": {
  }
})
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });

https://api.pokemontcg.io/v2/cards?q=name:/$

