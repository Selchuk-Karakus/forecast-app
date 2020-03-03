import React from 'react';

const Form = (props) => {
    return(
        <div className="cointainer">
            <div className="row">
                <div className="col-md3 offset-md-2">
                    <input 
                        type="text" 
                        className="form-control"
                        name="city"
                        autoComplete="off"
                    />
                </div>
                <div className="col-md3">
                    <input 
                        type="text" 
                        className="form-control"
                        name="country"
                        autoComplete="off"
                    />
                </div>
                <div className="col-md3">
                    <button className="btn btn-warning mt-md-0 text-md-left">Get Weather</button>
                </div>
            </div>
        </div>
    )
}

export default Form;