const nameTitle = document.getElementById('pokemon-name');
const pokeImage = document.getElementById('pokemon-image');
const inputPoke = document.getElementById('guess');
async function showPokemon(){
    const pokeData = await getGameData(); 
    nameTitle.innerHTML = pokeData.pokemon.name.toUpperCase();
    nameTitle.style.opacity = 0;
    pokeImage.src = pokeData.pokemon.image;
    pokeImage.style.filter = 'brightness(0)'
    inputPoke.addEventListener('keypress', function(e){
        if(e.key === 'Enter'){
            if(inputPoke.value.toLowerCase() === pokeData.pokemon.name){
                inputPoke.style.backgroundColor = 'green';
                pokeImage.style.filter = 'brightness(1)'
            }else{
                inputPoke.style.backgroundColor = 'red';
            }
        }
    })
}
showPokemon();

const playAgain = document.getElementById('again');
playAgain.addEventListener('click', function(){
    showPokemon();
    inputPoke.value = '';
    inputPoke.style.backgroundColor = 'rgb(245,245,245)';
})