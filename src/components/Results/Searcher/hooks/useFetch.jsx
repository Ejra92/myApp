import { useEffect, useState } from 'react';

const useFetch = ( query ) => {

    const [ data, setData ] = useState( { } );

    useEffect(() => {

        if( query.trim() === '' ) return

        const fetchData = async () => {

            const response = await fetch( `https://swapi.dev/api/planets?search=${ query }` );

            const parseResponse = await response.json();

            setData( parseResponse );

        }

        fetchData();

    }, [ query ]);

    return data;

};

export default useFetch;