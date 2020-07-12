import React from 'react';
import style from './SearchBar.module.scss';
import { SubmitButton } from '../SubmitButton';

interface SearchBarProps {
    handleChange: (event: any) => void,
};

const SearchBar = ({ handleChange }: SearchBarProps) => {
    let placeholder = 'Type a Pokemon name';

    return (
        <div>
            <h1>Pokemon Finder</h1>
            <h2>El que quiere Pokemons, que los busque</h2>
            <input className={style.searchBar} type="text" placeholder={placeholder} onChange={handleChange} />
            <SubmitButton />
        </div>
    )
}

export default SearchBar;
