import React from 'react';

const SearchBar = (props) => {
    return ( 
        <div>
            <input
                type = "text"
                value = {props.searchBar} 
                onChange = {props.changeSearchContent}
            />
             <button 
                type="button" 
                onClick={props.btnClick}>Search</button>
        </div>
    );
};

export default SearchBar;