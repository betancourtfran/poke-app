import React from 'react';
import { Button } from '../';
import style from './SearchBar.module.scss';

interface ISearchBarProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
};

const SearchBar = ({ onSubmit }: ISearchBarProps): JSX.Element => {
    let placeholder = 'Type a Pokemon name';
    return (
        <div className={style.container}>
            <form onSubmit={onSubmit}>
                <input className={style.searchBar} type='text' placeholder={placeholder} />
                <Button />
            </form>
        </div>
    )
}

export default SearchBar;
