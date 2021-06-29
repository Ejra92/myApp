import { Children, useCallback, useContext } from 'react';

import Result from './Result';
import Searcher from './Searcher';

import { AppContext } from '../../store';

const Results = () => {

    const { results, deleteOneResult } = useContext( AppContext );

    const createHandleClick = useCallback(
        name => () => deleteOneResult( name ),
        [ deleteOneResult ],
    ) 

    const mapFunc = props => <Result handleClick={ createHandleClick( props.name ) } { ...props } />

    return (
        <>
            <Searcher />

            { Children.toArray( results.map( mapFunc ) ) }
        </>
    );

};

export default Results;