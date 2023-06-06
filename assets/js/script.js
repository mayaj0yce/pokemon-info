// Adds an event listener to the searchButton. //MR 31.05.23

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', handleSearch);

async function getPokemonInfo(pokemon) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const pokemonName = data.name;
    const pokeImage = data.sprites.front_default;
    const pokemonAbilities = data.abilities.map(ability => ability.ability.name);
    const pokemonMoves = data.moves.map(move => move.move.name);
    pokemonMoves.length = 4;
    //limits the amount of moves displayed to 3 (not a bajillion)
    console.log(pokeImage)

    return {
      name: pokemonName,
      sprite: pokeImage,
      abilities: pokemonAbilities,
      moves: pokemonMoves,
      // locationOne: data.location_area_encounters,



    };

  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}


// Function to handle the search button click event. //MR 31.05.23

function handleSearch() {
  const pokeInput = document.getElementById('pokeInput');
  const searchTerm = pokeInput.value.trim();

  getPokemonInfo(searchTerm)
    .then(result => {
      const resultContainer = document.getElementById('resultContainer');
      resultContainer.innerHTML = '';

      if (result) {
        const pokemonName = document.createElement('h3');
        pokemonName.textContent = `Pokemon Name: ${result.name}`;

        const abilitiesList = document.createElement('p');
        abilitiesList.textContent = `Abilities: ${result.abilities.join(', ')}`;

        const movesList = document.createElement('p');
        movesList.textContent = `Moves: ${result.moves.join(', ')}`;

        const PokeImg = document.createElement('img');
        PokeImg.src = result.sprite;
       

        resultContainer.appendChild(pokemonName);
        resultContainer.appendChild(abilitiesList);
        resultContainer.appendChild(movesList);
        
        resultContainer.appendChild(PokeImg);

      } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'No Pokémon found with the provided ID or name.';
        resultContainer.appendChild(errorMessage);
      }
    });



  function createPokeImage(pokemon, containerDiv) {
    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokemon}.png`
    containerDiv.append(pokeImage);
  }
  console.log(pokemon)
};
// 