var requestUrl = 'https://pokeapi.co/api/v2/ability/{id or name}/';

// fetch('https://pokeapi.co/api/v2/pokemon/')
fetch(requestUrl)

.then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
    .then(
        (responseText) => {
            setPokemon({
                name: pokemonName,
                species: responseText.data.species.name
            // Image(gif here?)
                HP: responseText.data.stats[0].base.stat,
                type: responseText.data.type[0].ytpe.name,
            })
            consolelog(responseText)
        }
    );
// the TextDecoderStream
     .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then(data => {
        console.log(data);
        displayCocktail(data)
      })
      .catch((error) => console.error("FETCH ERROR:", error));
// // upon search plug into string with variable 
// // add to fetch call 

// var responseText = document.getElementById('pokename');
// var event = g
// .then 
// .then (update ui)


// var requestUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';


var requestUrl = 'https://pokeapi.co/api/v2/ability/{id or name}/';
//search pokemon by name//

// var requestUrl = 'https://pokeapi.co/api/v2/name/';

// var requestUrl = 'https://pokeapi.co/api/v2/name/';



