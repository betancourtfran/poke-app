import React, { Component } from 'react';
import { SearchResults, SearchBar, Footer } from './components';
import style from './App.module.scss';

interface AppProps {
  pokemon: string,
  previousSearch: string,
}

class App extends Component<AppProps> {
  static defaultProps = {
    pokemon: 'default',
    previousSearch: 'default'
  }
  handlePokemonSearch = (event: any): void => {
    console.log(event);
  }

  render() {
    return (
      <div className={style.app}>
        <h1>Pokemon Finder</h1>
        <span>El que quiere Pokemons, que los busque</span>
        <SearchBar handleChange={this.handlePokemonSearch} />
        <SearchResults />
        <Footer />
      </div>
    )
  }

}

export default App;
