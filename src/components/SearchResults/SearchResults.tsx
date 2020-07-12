import React, {Component} from 'react';
import style from './SearchResults.module.scss';

interface SearchResultsProps {
    name: string,
    img: string
};


class SearchResults extends Component<SearchResultsProps> {
    
    static defaultProps = {
        name: 'default name',
        img: 'someUrl'
    }

    render(){
        return (
            <div>
                <h3>Resultados de la busqueda</h3>
                <ul>
                    <li>
                        <img src="http://lorempixel.com/g/400/200/cats" alt=""/>
                    </li>
                    <li>
                        <img src="http://lorempixel.com/g/400/200/cats" alt=""/>
                    </li>
                    <li>
                        <img src="http://lorempixel.com/g/400/200/cats" alt=""/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SearchResults;