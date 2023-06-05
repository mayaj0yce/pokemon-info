function ImageFind(){
    fetch('https://pokeapi.co/api/v2/ability/' + (pokemon)) 
    .then(response => response.json())
    .then(yourpokemon => console.log(yourpokemon))
  }
  
 
   
   function fetchPokemonData(pokemon){
    let url = pokemon.url 
      fetch(url)
      .then(response => response.json())
      .then(function(pokeData){
      console.log(pokeData)
      })
    }
    
    function renderPokemon(pokeData){
        let allPokemonContainer = document.getElementById('poke-container');
        let pokeContainer = document.createElement("div") 
        let pokeName = document.createElement('h4')
        pokeName.innerText = pokeData.name
        let pokeNumber = document.createElement('p')
        pokeNumber.innerText = `#${pokeData.id}`
        let pokeTypes = document.createElement('ul') 
        //ul list will hold the pokemon types
        createTypes(pokeData.types, pokeTypes) 
        // helper function to go through the types array and create li tags for each one
        pokeContainer.append(pokeName, pokeNumber, pokeTypes);   
        //appending all details to the pokeContainer div
        allPokemonContainer.appendChild(pokeContainer);       
        //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
        }
        
        function createTypes(types, ul){
            types.forEach(function(type){
            let typeLi = document.createElement('li');
            typeLi.innerText = type['type']['name'];
            ul.append(typeLi)
            })
          }
          
          function createPokeImage(pokeID, containerDiv){
    let pokeImage = document.createElement('img')
    pokeImage.srcset =    `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`
    containerDiv.append(pokeImage);
  }