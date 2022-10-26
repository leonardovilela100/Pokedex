const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const state1 = document.querySelector('.stats1')
const state2 = document.querySelector('.stats2')
const state3 = document.querySelector('.stats3')
const state5 = document.querySelector('.stats5')

const basestat1 = document.querySelector('.basestat1')
const basestat2 = document.querySelector('.basestat2')
const basestat3 = document.querySelector('.basestat3')
const basestat5 = document.querySelector('.basestat5')

const typepokemon = document.querySelector('.typepokemon')


let searchPokemon = 1

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIResponse.status === 200) { 
    const data = await APIResponse.json();
    return data;
  }
}
const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = 'Loading...'
  pokemonNumber.innerHTML = ''
 


  const data = await fetchPokemon(pokemon)

  if (data) {
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name
    state1.innerHTML = data.stats[0].stat.name
    state2.innerHTML = data.stats[1].stat.name
    state3.innerHTML = data.stats[2].stat.name
    state5.innerHTML = data.stats[5].stat.name

    typepokemon.innerHTML = data.types[0].type.name.toUpperCase()

    basestat1.innerHTML = data.stats[0].base_stat
    basestat2.innerHTML = data.stats[1].base_stat
    basestat3.innerHTML = data.stats[2].base_stat
    basestat5.innerHTML = data.stats[5].base_stat


    //console.log(data.types[0].type.name) tipo
    pokemonNumber.innerHTML = data.id
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = ''
  }else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Not Found'
    pokemonNumber.innerHTML = ''
    
  }


} 

form.addEventListener('submit', (event) => {

  event.preventDefault();
  renderPokemon(input.value.toLowerCase())

})




renderPokemon('39')







 