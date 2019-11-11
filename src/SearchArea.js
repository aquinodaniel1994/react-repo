import React from 'react';


const SearchArea = (props) => {
    return(
      <div className="search-area" align="center">
          <form onSubmit={props.searchBook} action="">
              <input onChange={props.handleSearch} type="text"/>
              <button type="submit">Search</button>
              <select>
                  <option disabled value="Sort" onChange={props.handleSort}>Sort</option>
                  <option value="Newest">Newest</option>
                  <option value="Oldest">Oldest</option>
              </select>
          </form>
      </div>
    )
}

export default SearchArea;