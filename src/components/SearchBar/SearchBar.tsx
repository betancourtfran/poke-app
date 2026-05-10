import React from 'react';
import { Button } from '../';
import style from './SearchBar.module.scss';

interface ISearchBarProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    onChange: (value: string) => void
};

const SearchBar = ({ onSubmit, onChange }: ISearchBarProps): JSX.Element => {
    let placeholder = 'Type a Pokemon name';
    return (
        <div className={style.container}>
            <form onSubmit={onSubmit}>
                <input 
                    className={style.searchBar} 
                    type='text' 
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                />
                <Button />
            </form>
        </div>
    )
}

export default SearchBar;
