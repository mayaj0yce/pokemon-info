// Adds an event listener to the searchButton. //MR 31.05.23

// const searchButton = document.getElementById('searchButton');
// searchButton.addEventListener('click', handleSearch);

async function getPokemonInfo(pokemon) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

   
    const pokeImage = data.sprites.front_default;
   
    return {
    //   name: pokemonName,
      sprite: pokeImage,
      

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
   
getPokemonInfo(searchTerm)
.then(result => {
  const imgResults = document.getElementById('imgResults');
  imgResults.innerHTML = '';
  if (result) {
    const spriteImage = document.createElement('img');
    resultContainer.appendChild(spriteImage);
  


      } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'No Pokémon found with the provided ID or name.';
        resultContainer.appendChild(errorMessage);
      }
    });

  pokeInput.value = '';

}

// listEncounterData()


