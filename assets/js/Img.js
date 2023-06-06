
const searchButton1 = document.getElementById('searchButton');
searchButton1.addEventListener('click', returnCard);

async function getPokemonCard(pokemon) {
    const cardUrl = `https://api.pokemontcg.io/v2/cards?q=${pokemon}`;
    

    try {
        const response2 = await fetch(cardUrl);
        const data = await response2.json();
        console.log(pokemon)

        const no = 0;

        const pokeCard = data.images;
       

        return {
            card: pokeCard,

        };

    } catch (error) {
        console.error('Error:', error);
        return null;

    }
}

function returnCard() {
    const pokeInput = document.getElementById('pokekInput');
    const searchTerm = pokeInput.trim();

    getPokemonCard(searchTerm)
        .then(result => {
            const imageContainer = document.getElementById('imageContainer');
            imageContainer.innerHTML = '';

            if (result) {
                const pokeCard = document.createElement('img');
                pokeCard.src = result.images;

                imageContainer.appendChild(pokeCard);


            } else {
                const errorMessage = document.createElement('p');
                errorMessage.textContent = 'No image found.';
                imageContainer.appendChild(errorMessage);
            }
        });


}