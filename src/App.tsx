import React, { Component } from 'react';
import { SearchResults, SearchBar, Footer } from './components';
import style from './App.module.scss';
import { searchPokemon } from './services/request';

interface AppProps {
  lastSearch: string,
  pokemonFound: object
}

class App extends Component<{}, AppProps> {
  constructor(props) {
    super(props);
    this.state = {
      lastSearch: '',
      pokemonFound: {}
    }
  }

  filterPokemon = (pokemonName: string): void => {
    searchPokemon(pokemonName).then(({ data }) => this.setState({
      pokemonFound: data
    }));
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.filterPokemon(event.target[0].value);
  }

  render = () => {
    return (
      <div className={style.app}>
        <h1>Pokemon Finder</h1>
        <span>El que quiere Pokemons, que los busque</span>
        <SearchBar onSubmit={this.handleSubmit} />
        <SearchResults pokemonFound={this.state.pokemonFound}/>
        <Footer />
      </div>
    )
  }

}

export default App;
