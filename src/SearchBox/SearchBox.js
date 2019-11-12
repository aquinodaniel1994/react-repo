import React from 'react';

const SearchBox = (props) => {
    return (
        <div className="container">
            <div className="input-group mb-3 mt-5">
                <input type="text" className="form-control" placeholder="Enter book Name" 
                aria-label="Recipient's username" aria-describedby="button-addon2" 
                value={props.searchArea} onChange={props.changeSearch} />

                <div className="input-group-append">
                    <button className="btn btn-warning" type="button" id="button-addon2" onClick={props.btnClick}>Search</button>
                </div>
            </div>
        </div>
    );
}
export default SearchBox;