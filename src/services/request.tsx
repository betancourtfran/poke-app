import axios from 'axios';

interface IPokemon {
    name: string;
    sprites: any;
    id: any;
    types: any;
    weight: any;
    abilities: any;
}

interface IFilteredPokemon {
    pokemons: Array<IPokemon>;
    isFetching: boolean;
    pokemonFound?: boolean;
}

const endPointBaseURL = `https://pokeapi.co/api/v2/pokemon`;

const getPokemons = (): Promise<any> => axios.get(`${endPointBaseURL}?limit=1000`).then(res => res.data.results).catch(err => err);
const getPokemon = (pokemon): Promise<any> => axios.get(`${endPointBaseURL}/${pokemon}`).then(res => res.data).catch(err => err);
const fetchPokemonsInfo = (pokemons): Promise<any> => Promise.all(pokemons.map(async pokemon => await getPokemon(pokemon.name)));
const filterPokemon = async (allPokemons: Array<IPokemon>, pokemonToFilter: string): Promise<IFilteredPokemon> => {
    let regex: RegExp = new RegExp(`\\b(\\w*${pokemonToFilter}\\w*)\\b`, 'i');
    let foundPokemons: Array<IPokemon> = allPokemons.filter(pokemon => regex.test(pokemon.name));
    if (foundPokemons.length === 0) {
      return {
        isFetching: false,
        pokemonFound: true,
        pokemons: foundPokemons
      };
    }
    let pokemonsWithFullData = await fetchPokemonsInfo(foundPokemons);
    return {
      pokemons: pokemonsWithFullData,
      isFetching: false
    };
  };

export {
    getPokemons,
    filterPokemon
};

