
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

// Adds an event listener to the searchButton. //MR 31.05.23
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', handleSearch);

function searchAPI(pokeName) 
    var url = "https://pokeapi.co/api/v2/ability/{id or name}/"

    // Json method on the response. //
    fetch(requestUrl)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(
            (response) => {
                setPokemon({
                    name: pokemonName,
                    species: response.data.species.name,
                    // Image(gif here?)
                    HP: response.data.stats[0].base.stat,
                    type: response.data.type[0].ytpe.name,
                })
                consolelog(response)
            })

        .then(data => {
            console.log(data);
        })
        .catch((error) => console.error("FETCH ERROR:", error));



    var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];


function searchAPI(pokeName) {
  var url = "https://pokeapi.co/api/v2/pokemon/{id or name}/";

  fetch(url).then(function(response){
    return response.json() 
    
    })
        
  .then(function(data){
    //Sets a variable that clears the data when called below. //
    clear#######()

    console.log(data)
    

}}
