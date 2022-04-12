let url = 'https://pokeapi.co/api/v2/pokemon/';


const getGameData = async function(){
    const pokemon = await getPokemonToGuess();
    const pokeData = {
        pokemon: {
            name: pokemon.name,
            image: pokemon.image
        }
    };
    console.log(pokeData);
    return pokeData;
}

async function getPokemons(){
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const pokemons = await res.json();
    return pokemons.results;
}

async function getPokemonToGuess(){
    let pokemons = await getPokemons(); 
    let numberRandom = Math.floor(Math.random() * pokemons.length)
    let guessPokemon = pokemons[numberRandom];
    let pokemonImage = await getPokeImage(numberRandom);
    return {name: guessPokemon.name,
            image: pokemonImage
    };
}

async function getPokeImage(number){
    let pokemonDetail = await fetch(`https://pokeapi.co/api/v2/pokemon/${number + 1}`);
    pokemonDetail = await pokemonDetail.json();
    return pokemonDetail.sprites.front_default;
}
