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

// Console logs a list of locations but only for pikachu or any pokemon you manually insert into the code below. Need to figure out how to embed this in the async await method above. So far all my attempts to do so have failed. 
async function listEncounterData() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`);
    const pokemonData = await response.json();
    console.log(pokemonData);

    const encounterResponse = await fetch(pokemonData.location_area_encounters);
    const encounterData = await encounterResponse.json();

    for (let i = 0; i < 5; i++) {
      console.log(encounterData[i].location_area.name);
    }
  } catch (error) {
    console.log(error);
  }
}

listEncounterData();

}
