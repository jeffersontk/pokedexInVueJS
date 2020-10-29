import axios from 'axios'
const getPokemons = (pokename) =>{
  const response = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
  console.log(response.data);
  return response.data
}

export default {
  getPokemons
}
