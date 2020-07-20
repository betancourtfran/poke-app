import React, { Component } from 'react';
import { SearchResults, SearchBar, Footer } from './components';
import { getPokemons, getPokemon } from './services/request';
import style from './App.module.scss';

interface IAppState {
  pokemons: Array<any>,
  allPokemons: Array<any>,
  isFetching: boolean,
  pokemonNotFound: boolean
};

class App extends Component<{}, IAppState>{
  constructor(props) {
    super(props);
    this.state = { pokemons: [], allPokemons: [], isFetching: false, pokemonNotFound: false };
  }

  fetchPokemonsInfo = (pokemons): Promise<any> => Promise.all(pokemons.map(async pokemon => await getPokemon(pokemon.name)));

  filterPokemon = async (pokemonName: string) => {
    let regex = new RegExp(`\\b(\\w*${pokemonName}\\w*)\\b`, 'i');
    let foundPokemons = this.state.allPokemons.filter(pokemon => regex.test(pokemon.name));
    if (foundPokemons.length === 0) {
      this.setState({
        isFetching: false,
        pokemonNotFound: true,
        pokemons: foundPokemons
      });
      return;
    };
    let pokemonsWithFullData = await this.fetchPokemonsInfo(foundPokemons);
    this.setState({
      pokemons: pokemonsWithFullData,
      isFetching: false
    });
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!event.target[0].value) return;
    this.setState({
      isFetching: true
    });
    this.filterPokemon(event.target[0].value);
  };

  componentWillMount = () => {
    let result = getPokemons();
    result.then(res => this.setState({
      allPokemons: res
    })
    );
  }

  render = (): JSX.Element => {
    return (
      <div className={style.app}>
        <h1>Pokemon Finder</h1>
        <span>El que quiere Pokemons, que los busque</span>
        <SearchBar onSubmit={this.handleSubmit} />
        <SearchResults pokemons={this.state.pokemons} isFetching={this.state.isFetching} pokemonNotFound={this.state.pokemonNotFound} />
        <Footer />
      </div>
    )
  }

}

export default App;
