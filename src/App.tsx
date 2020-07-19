import React, { Component } from 'react';
import { SearchResults, SearchBar, Footer } from './components';
import { getPokemons, getPokemon } from './services/request';
import style from './App.module.scss';

interface AppState {
  pokemons: Array<any>,
  allPokemons: Array<any>,
  isFetching: boolean
};

class App extends Component<{}, AppState>{
  constructor(props) {
    super(props);
    this.state = { pokemons: [], allPokemons: [], isFetching: false };
  }

  formatPokemons = (pokemons): Promise<any> => Promise.all(pokemons.map(async pokemon => await getPokemon(pokemon.name)));

  filterPokemon = async (pokemonName: string) => {
    let regex = new RegExp(`\\b(\\w*${pokemonName}\\w*)\\b`, 'i');
    let allPokemons = this.state.allPokemons.filter(pokemon => regex.test(pokemon.name));
    let formattedPokemons = await this.formatPokemons(allPokemons);
    this.setState({
      pokemons: formattedPokemons,
      isFetching: !this.state.isFetching
    });
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    this.setState({
      isFetching: !this.state.isFetching
    });
    event.preventDefault();
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
        <SearchResults pokemons={this.state.pokemons} isFetching={this.state.isFetching}/>
        <Footer />
      </div>
    )
  }

}

export default App;
