// var requestUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';


var requestUrl = 'https://pokeapi.co/api/v2/ability/{id or name}/';
//search pokemon by name//

// var requestUrl = 'https://pokeapi.co/api/v2/name/';

// var requestUrl = 'https://pokeapi.co/api/v2/name/';



// Maridon's Search Bar: 

// Function searching the API: 

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
  