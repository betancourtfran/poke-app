import axios from 'axios';

const endPointBaseURL = `https://pokeapi.co/api/v2/pokemon`;

const getPokemons = (): Promise<any> => axios.get(`${endPointBaseURL}?limit=1000`).then(res => res.data.results).catch(err => err);
const getPokemon = (pokemon): Promise<any> => axios.get(`${endPointBaseURL}/${pokemon}`).then(res => res.data).catch(err => err);

export {
    getPokemons,
    getPokemon
};

