import { useState, useCallback, Children, useContext } from 'react';

import useFetch from './hooks/useFetch';
import { AppContext } from "../../../store";

import SearchItem from './SearchItem';


const Searcher = () => {

    const [ query, setQuery ] = useState( '' );
    const data  = useFetch( query );
    const { addNewResult, results } = useContext( AppContext );
    

    const handleEvents = useCallback(
        e => { e.type === 'change' ? setQuery( e.target.value ) : setQuery( '' ) },
        [],
    ) 

    const mapFunc = data => <SearchItem { ...data } addNewResult={ addNewResult } results={ results } />

    return (
        <>  
            <div className="input-group mb-1">
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder="Search a planet" 
                    onChange={ handleEvents }
                    value={ query }
                />

                { query.trim().length > 0 && ( 
                    <button 
                        onClick={ handleEvents } 
                        type="button" 
                        className="btn btn-outline-secondary" 
                        id="button-addon2"
                    >
                        Clear
                    </button>
                ) }
            </div>

            <ul className="list-group mb-3">
                { query.trim().length > 0 && data?.count > 0 && Children.toArray( data?.results.map( mapFunc ) ) }

                { query.trim().length > 0 && data?.count === 0 && (
                    <div className="alert alert-danger" role="alert">
                        There are not results for your search.
                    </div>
                ) }
            </ul>
        </>
    );

};

export default Searcher;