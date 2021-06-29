import { createContext, useState, useCallback, useEffect, useMemo } from 'react';

const AppContext = createContext();

const storateResults = JSON.parse( localStorage.getItem( 'results' ) );

const AppProvider = ( { children } ) => {

    const [ results, setResults ] = useState( storateResults !== null ? storateResults : [ ] );

    const addNewResult = useCallback(
        newResult => setResults( 
            prev => prev.some( result => result.name === newResult.name )
                ? prev
                : [ ...results, newResult ]
        ),
        [ results ],
    );

    const deleteOneResult = useCallback(
        newResult => {
            if( results.filter( result => result.name !== newResult ) ) setResults( results.filter( result => result.name !== newResult ) );
        },
        [ results ],
    );

    useEffect(() => {

        if( results.length >= 0 ) localStorage.setItem( 'results', JSON.stringify( results ) );

    }, [ results ])

    const value = useMemo(() => ({
        results,
        addNewResult,
        deleteOneResult
    }), [ results, addNewResult, deleteOneResult ]);

    return (
        <AppContext.Provider value={ value } >
            { children }
        </AppContext.Provider>
    );

};

export {
    AppProvider,
    AppContext
};