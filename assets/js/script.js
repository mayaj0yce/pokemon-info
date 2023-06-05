// Adds an event listener to the searchButton
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
    pokemonMoves.length = 3;
    //limits the amount of moves displayed to 3 (not a bajillion)

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

function handleSearch() {
  const pokeInput = document.getElementById('pokeInput');
  const searchTerm = pokeInput.value.trim();

  getPokemonInfo(searchTerm)
    .then(result => {
      const resultContainer = document.getElementById('resultContainer');
      resultContainer.innerHTML = '';

      if (result) {
        const pokemonName = document.createElement('h3');
        pokemonName.textContent = `Name: ${result.name}`;

        const abilitiesList = document.createElement('p');
        abilitiesList.textContent = `Abilities: ${result.abilities.join(', ')}`;

        const movesList = document.createElement('p');
        movesList.textContent = `Moves: ${result.moves.join(', ')}`;
       

        const spriteImage = document.createElement('img');
        // spriteImage.imageContent = `Sprites: ${result.sprites.display()}`;
        
        resultContainer.appendChild(pokemonName);
        resultContainer.appendChild(abilitiesList);
        resultContainer.appendChild(movesList);
        resultContainer.appendChild(spriteImage);

        fetch(result.locationOne)
          .then(response => response.json())
          .then(encounterData => {
            const locationOne = document.createElement('p');
            //encounter data needs to be relocated
            locationOne.textContent = `Location1: ${encounterData.location_area}`;
            console.log(encounterData.location_area);
            resultContainer.appendChild(locationOne);
          });

        

      } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'No Pokémon found with the provided ID or name.';
        resultContainer.appendChild(errorMessage);
      }
    });

  pokeInput.value = '';
}