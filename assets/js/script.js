/////////////////////////////////////////////////////////////////////////////////
async function getPokemonNameInfo(pokemon) {
  const apiNameUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
    const response = await fetch(apiNameUrl);
    const data = await response.json();

    // Extracts the relevant information from the data object. //MR 31.05.23
    const pokemonName = data.name;
    const pokemonAbilities = data.abilities.map(ability => ability.ability.name);
    

    // Return the extracted information - ***ISSUE***, only accepts all lower case pokemon names, need to make sure it accepts and prints the pokemon name's first letter. //MR 31.05.23
    return {
      name: pokemonName,
      abilities: pokemonAbilities,
      
      
    };
  } catch (error) {
    // Handle any errors that occur during the API request. //MR 31.05.23
    console.error('Error:', error);
    return null;
  }
}


////////////////////////////////POKE ID URL:

async function getPokemonIdInfo(id) {
  const apiIdUrl = `https://pokeapi.co/api/v2/characteristic/id/${id}`;

  try {
    const response = await fetch(apiIdUrl);
    const data = await response.json();

    const pokemonId = data.id;
    
    return {
      id: pokemonId,
      
    };
  } catch (error) {
    console.error('Error:', error);
    return null;
  }

}

 ///////////////////////////POKEMON ENCOUNTER LOCATION**********

 async function getPokemonLocInfo(encounter) {
  const apiEncounterUrl = `https://pokeapi.co/api/v2/pokemon/encounter/${encounter}`;

  try {
    const response = await fetch(apiEncounterUrl);
    const data = await response.json();

    // Extracts the relevant information from the data object. //MR 31.05.23
    const pokemonEncounter = data.encounter;
    

    // Return the extracted information - ***ISSUE***, only accepts all lower case pokemon names, need to make sure it accepts and prints the pokemon name's first letter. //MR 31.05.23
    return {
      encounter: pokemonEncounter,
      
    };
  } catch (error) {
    // Handle any errors that occur during the API request. //MR 31.05.23
    console.error('Error:', error);
    return null;
  }
}
////////////////////////////////////////////////////////////////////////////
//YOU'LL PROBABLY HAVE TO TRIPLICATE THE CODE BELOW AS WELL.

// Function to handle the search button click event. //MR 31.05.23
function handleSearch() {
  const pokeInput = document.getElementById('pokeInput');
  const searchTerm = pokeInput.value.trim();

  // Calls the API function with the relevant search term. This creates a container below the search bar that needs to be moved into MJ's section //MR 31.05.23
  getPokemonNameInfo(searchTerm)
    .then(result => {
      const resultContainer = document.getElementById('resultContainer');

      // Clears previous search results. //MR 31.05.23
      resultContainer.innerHTML = '';

      if (result) {
        // Creates and appends elements in order to display the Pokémon information. //MR 31.05.23
        const pokemonName = document.createElement('h3');
        pokemonName.textContent = `Name: ${result.name}`;

        const pokemonEncounter = document.createElement('p');
        abilitiesList.textContent = `Where to encounter: ${result.pokemonEncounter.join(', ')}`;

        resultContainer.appendChild(pokemonName);
        resultContainer.appendChild(abilitiesList);
        
      } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'No Pokémon found with the provided ID or name.';
        resultContainer.appendChild(errorMessage);
      }
    });

    getPokemonIdInfo(searchTerm)
    .then(result => {
      const resultContainer = document.getElementById('resultContainer');

   // Clears the searchButton's input field. //MR 31.05.23
  pokeInput.value = '';

      if (result) {
        // Creates and appends elements in order to display the Pokémon information. //MR 31.05.23
        const pokemonName = document.createElement('h3');
        pokemonName.textContent = `Name: ${result.name}`;

        const pokemonId = document.createElement('h3');
        pokemonId.textContent = `Poke Id: ${result.id}`;

        const pokemonEncounter = document.createElement('p');
        abilitiesList.textContent = `Where to encounter: ${result.pokemonEncounter.join(', ')}`;

        const abilitiesList = document.createElement('p');
        abilitiesList.textContent = `Abilities: ${result.abilities.join(', ')}`;

        resultContainer.appendChild(pokemonName);
        resultContainer.appendChild(pokemonId);
        resultContainer.appendChild(pokemonEncounter);
        resultContainer.appendChild(abilitiesList);
        
      } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'No Pokémon found with the provided ID or name.';
        resultContainer.appendChild(errorMessage);
      }
    });

    getPokemonLocInfo(searchTerm)
    .then(result => {
      const resultContainer = document.getElementById('resultContainer');

      // Clears the searchButton's input field. //MR 31.05.23
  pokeInput.value = '';

      if (result) {
        // Creates and appends elements in order to display the Pokémon information. //MR 31.05.23
        const pokemonName = document.createElement('h3');
        pokemonName.textContent = `Name: ${result.name}`;

        const pokemonId = document.createElement('h3');
        pokemonId.textContent = `Poke Id: ${result.id}`;

        const pokemonEncounter = document.createElement('p');
        abilitiesList.textContent = `Where to encounter: ${result.pokemonEncounter.join(', ')}`;

        const abilitiesList = document.createElement('p');
        abilitiesList.textContent = `Abilities: ${result.abilities.join(', ')}`;

        resultContainer.appendChild(pokemonName);
        resultContainer.appendChild(pokemonId);
        resultContainer.appendChild(pokemonEncounter);
        resultContainer.appendChild(abilitiesList);
        
      } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'No Pokémon found with the provided ID or name.';
        resultContainer.appendChild(errorMessage);
      }
    });

  // Clears the searchButton's input field. //MR 31.05.23
  pokeInput.value = '';
}

// Adds an event listener to the searchButton. //MR 31.05.23
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', handleSearch);
