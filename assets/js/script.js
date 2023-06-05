// Adds an event listener to the searchButton. //MR 31.05.23
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', handleSearch);

async function getPokemonInfo(pokemon) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Extracts the relevant information from the data object. //MR 31.05.23
    const pokemonName = data.name;
    const pokemonAbilities = data.abilities.map(ability => ability.ability.name);
    const pokemonMoves = data.moves.map(move => move.move.name);

    // Return the extracted information - ***ISSUE***, only accepts all lower case pokemon names, need to make sure it accepts and prints the pokemon name's first letter. //MR 31.05.23
    return {
      name: pokemonName,
      abilities: pokemonAbilities,
      moves: pokemonMoves
    };
  } catch (error) {
    // Handle any errors that occur during the API request. //MR 31.05.23
    console.error('Error:', error);
    return null;
  }
}

// Function to handle the search button click event. //MR 31.05.23
function handleSearch() {
  const pokeInput = document.getElementById('pokeInput');
  const searchTerm = pokeInput.value.trim();

  // Calls the API function with the relevant search term. This creates a container below the search bar that needs to be moved into MJ's section //MR 31.05.23
  getPokemonInfo(searchTerm)
    .then(result => {
      const resultContainer = document.getElementById('resultContainer');

      // Clears previous search results. //MR 31.05.23
      resultContainer.innerHTML = '';

      if (result) {
        // Creates and appends elements in order to display the Pokémon information. //MR 31.05.23
        const pokemonName = document.createElement('h3');
        pokemonName.textContent = `Name: ${result.name}`;

        const abilitiesList = document.createElement('p');
        abilitiesList.textContent = `Abilities: ${result.abilities.join(', ')}`;

        const movesList = document.createElement('p');
        movesList.textContent = `Moves: ${result.moves.join(', ')}`;

        resultContainer.appendChild(pokemonName);
        resultContainer.appendChild(abilitiesList);
        resultContainer.appendChild(movesList);
      } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'No Pokémon found with the provided ID or name.';
        resultContainer.appendChild(errorMessage);
      }
    });

  // Clears the searchButton's input field. //MR 31.05.23
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
