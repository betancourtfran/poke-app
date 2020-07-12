import React, { Component } from 'react';
import style from './SearchResults.module.scss';

interface SearchResultsProps {
    name: string,
    img: string,
    pokemonDescription: string
};


class SearchResults extends Component<SearchResultsProps> {
    static defaultProps = {
        name: 'default name',
        img: 'someUrl',
        pokemonDescription: 'someDescription'
    }

    render() {
        return (
            <div>
                <h2>Resultados de la busqueda</h2>
                <div className={style.container}>
                    <ul>
                        <li>
                            <div>
                                <img width='150' height='150' src="http://lorempixel.com/g/150/150/cats" alt="" />
                                <p>{this.props.pokemonDescription}</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img width='150' height='150' src="http://lorempixel.com/g/150/150/cats" alt="" />
                                <p>{this.props.pokemonDescription}</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img width='150' height='150' src="http://lorempixel.com/g/150/150/cats" alt="" />
                                <p>{this.props.pokemonDescription}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SearchResults;