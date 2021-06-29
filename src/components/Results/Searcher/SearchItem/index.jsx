const liStyles = { cursor: 'pointer'};

const SearchItem = props => {

    const {
        climate,
        gravity,
        name,
        population,
        rotation_period,
        addNewResult,
        results
    } = props;

    const handleClick = () => {

        const newItemToAdd = {
            climate,
            gravity,
            name,
            population,
            rotation_period
        };

        addNewResult( newItemToAdd );

    }

    return (
        <li 
            onClick={ handleClick } 
            style={ liStyles } 
            className={ `list-group-item ${ results.some( result => result.name === name ) ? 'disabled' : '' }` }
        >
            { name }
        </li>
    );

};

export default SearchItem;