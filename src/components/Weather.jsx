import React from 'react';

const Weather = ({
    city, 
    country, 
    celsius, 
    tempMin, 
    tempMax, 
    description,
    weatherIcon
    }) => {
    return(
        <div className="container">
            <div className="cards">
                <h1>{city}, {country}</h1>
                <h5 className="py4">
                <i className={`wi ${weatherIcon} display-1`}></i>
                </h5>
                <h1 className="py-2">{celsius}&deg;</h1>
                {/* show max and min temp */}
                {minmaxTemp(tempMin, tempMax)}
                <h4 className="py-3">{description}</h4>
            </div>
        </div>
    );
};

function minmaxTemp(min, max) {
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    )
}

export default Weather;