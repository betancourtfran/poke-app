import React, { Component } from 'react';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
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
        <SearchBar handleChange={this.handlePokemonSearch}/>
        <SearchResults />
      </div>
    )
  }

}

export default App;
