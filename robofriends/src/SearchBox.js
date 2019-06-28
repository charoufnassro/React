import React from 'react'

const SearchBox = ( {searchfield, SearchChange} ) => {
    return (
        <div className="bg-black-05 ">
            <input 
            type="search" 
            placeholder="Search Robot" 
            className="tc br3 black-50 fw9 b--none  pa2 ma2 dib"
            onChange={SearchChange}/>
        </div>
    )
}

export default SearchBox
