var requestUrl = 'https://pokeapi.co/api/v2/ability/{id or name}/';

function searchAPI(pokeName) {
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



    // // upon search plug into string with variable 
    // // add to fetch call 

    // var responseText = document.getElementById('pokename');
    // var event = g
    // .then 
    // .then (update ui)

    var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];


    var requestUrl = 'https://pokeapi.co/api/v2/ability/{id or name}/';
    //search pokemon by name//

    // var requestUrl = 'https://pokeapi.co/api/v2/name/';

    // var requestUrl = 'https://pokeapi.co/api/v2/name/';



    // Maridon's Search Bar: 

    // Function searching the API: 

    function searchAPI(pokeName) {
        var url = "https://pokeapi.co/api/v2/pokemon/{id or name}/";

        fetch(url).then(function (response) {
            return response.json()

        })

            .then(function (data) {
                //Sets a variable that clears the data when called below. //
                clear()}
                )

        console.log(data)
    }
}
