const Result = ( { name, climate, gravity, population, rotation_period, handleClick } ) => {

    return (
        <div className="card col mb-3">
            <div className="card-body d-flex flex-column">
                <h2 className="card-title"> { name } </h2>

                <p className="card-text"> <strong> Climate</strong>:  { climate } </p>

                <p className="card-text"> <strong> Gravity</strong>:  { gravity } </p>

                <p className="card-text"> <strong> Population</strong>:  { population } </p>

                <p className="card-text"> <strong> Rotation period</strong>:  { rotation_period } </p>
                
                <button onClick={ handleClick } type="button" className="btn btn-danger"> Delete </button>
            </div>
        </div>
    );

};

export default Result;