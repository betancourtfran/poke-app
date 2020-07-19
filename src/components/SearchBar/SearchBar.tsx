import React from 'react';
import { Button } from '../';
import style from './SearchBar.module.scss';

interface SearchBarProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
};

const SearchBar = ({ onSubmit }: SearchBarProps) => {
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
