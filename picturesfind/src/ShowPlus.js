import React from 'react'

const ShowPlus = ({onShowPlus}) => {
    return (
        <div>
            <a onClick={onShowPlus} style = {{background : 'linear-gradient(to right, #03f099, #03f029)'}} className="f6 grow no-underline br-pill ph5 pv2 dib white mv2 fw6 " href="">Show Plus...</a>
        </div>
    )
}

export default ShowPlus
