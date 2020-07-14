import axios from 'axios';

const endPointBaseURL = `https://pokeapi.co/api/v2/pokemon`;

const searchPokemon = (name: string) => axios.get(`${endPointBaseURL}/${name}`).then(res => res).catch(err => err);

export {
    searchPokemon
};

