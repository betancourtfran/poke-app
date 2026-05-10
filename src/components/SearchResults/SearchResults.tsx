import React from 'react';
import { Loader } from '../'
import style from './SearchResults.module.scss';

export interface ISearchResultsProps {
	pokemons: Array<any>,
	isFetching: boolean,
	pokemonNotFound: boolean
}

const SearchResults = ({ pokemons, isFetching, pokemonNotFound }: ISearchResultsProps) => {
	return (
		<div className={style.container}>
			<Loader isFetching={isFetching} />
			{pokemons!.length > 0 ? (
				<>
					<h2>Resultados de la busqueda</h2>
					<div className={style.results}>
						<ul>
							{pokemons!.map(pokemon => (
								<li>
									<div className={style.results__result}>
										<img width='150' height='150' src={pokemon!.sprites.front_default} alt={pokemon.name} />
										<section>
											<h1>{pokemon!.name.charAt(0).toUpperCase() + pokemon!.name.slice(1)}</h1>
											<ul>
												<li>
													<strong>#: </strong>{pokemon!.id} <br />
												</li>
												<li>
													<strong>Type: </strong>{pokemon!.types.map(({ type }) => type.name).join(', ')} <br />
												</li>
												<li>
													<strong>Weight: </strong>{pokemon!.weight} <br />
												</li>
												<li>
													<strong>Abilities: </strong>{pokemon!.abilities.map(({ ability }) => ability.name).join(', ')} <br />
												</li>
											</ul>
										</section>
									</div>
								</li>
							)
							)
							}
						</ul>
					</div>
				</>
			) : pokemonNotFound && (
				<h2>Pokemon not found</h2>
			)
			}
		</div>
	)
}

export default SearchResults;