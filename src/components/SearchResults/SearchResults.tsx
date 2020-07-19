import React from 'react';
import style from './SearchResults.module.scss';

export interface SearchResultsProps {
	pokemons?: Array<any>
}

const SearchResults = ({ pokemons }: SearchResultsProps) => {
	return (
		<div className={style.container}>
			{pokemons!.length > 0 && (
				<>
					<h2>Resultados de la busqueda</h2>
					<div>
						<ul>
							{pokemons!.map(pokemon => (
								<li>
									<div>
										<img width='150' height='150' src={pokemon!.sprites.front_default} alt={pokemon.name} />
										<div>
											<p>{pokemon!.name.toUpperCase()}</p>
											<p>Habilities</p>
											<ul>
												{pokemon!.abilities.map(({ ability }) => <li>{ability.name}</li>)}
											</ul>
										</div>
									</div>
								</li>
							)
							)
							}
						</ul>
					</div>
				</>
			)
			}
		</div>
	)
}

export default SearchResults;