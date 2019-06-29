import React from 'react'

const BoxSearch = ({onSearchChange}) => {
    return (
        <div className="pa3 fw8 fixed left-0 right-0 top-2 mt4 z-999 mt1">
            <input type="search" placeholder="Search Picture" onChange={onSearchChange} className="pv2 ph7-l br2 bn h2 tc f5 fw6 ma2 "/>
        </div>
    )
}

export default BoxSearch
