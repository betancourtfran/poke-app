import React, { Component } from 'react';
import { SearchResults, SearchBar, Footer, Link } from './components';
import { getPokemons, filterPokemon } from './services/request';
import style from './App.module.scss';

interface IAppState {
  pokemons: Array<any>;
  allPokemons: Array<any>;
  isFetching: boolean;
  pokemonFound: boolean;
  searchTimeout: NodeJS.Timeout | null;
}

class App extends Component<{}, IAppState> {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      allPokemons: [],
      isFetching: false,
      pokemonFound: false,
      searchTimeout: null,
    };
  }

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if (!event.target[0].value) return;
    this.setState({
      isFetching: true,
    });
    const result = await filterPokemon(this.state.allPokemons, event.target[0].value);
    console.log('results: ', result);
    this.setState({
      isFetching: result.isFetching,
      pokemonFound: !!result.pokemonFound,
      pokemons: result.pokemons
    })
  };

  handleChange = (value: string): void => {
    if (this.state.searchTimeout) {
      clearTimeout(this.state.searchTimeout);
    }

    if (!value.trim()) {
      this.setState({
        pokemons: [],
        isFetching: false,
        pokemonFound: false,
        searchTimeout: null,
      });
      return;
    }

    const timeout = setTimeout(async () => {
      this.setState({
        isFetching: true,
      });
      const result = await filterPokemon(this.state.allPokemons, value);
      this.setState({
      isFetching: result.isFetching,
      pokemonFound: !!result.pokemonFound,
      pokemons: result.pokemons
    })
    }, 300); // 300ms delay

    this.setState({ searchTimeout: timeout });
  };

  componentWillUnmount = () => {
    if (this.state.searchTimeout) {
      clearTimeout(this.state.searchTimeout);
    }
  };

  componentDidMount = () => {
    let result = getPokemons();
    result.then((res) =>
      this.setState({
        allPokemons: res,
      }),
    );
  };

  render = (): JSX.Element => {
    return (
      <div className={style.app}>
        <h1>Pokemon Finder</h1>
        <span>the one who's looking for pokemons should use this</span>
        <SearchBar onSubmit={this.handleSubmit} onChange={this.handleChange} />
        <SearchResults
          pokemons={this.state.pokemons}
          isFetching={this.state.isFetching}
          pokemonNotFound={this.state.pokemonFound}
        />
        <Footer />
      </div>
    );
  };
}

export default App;
