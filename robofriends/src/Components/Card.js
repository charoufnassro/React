import React from 'react'

const Card = ({id, name, email}) => {
    const RandomColor = (id) => {
        const ColorList = ["light-blue", "light-gray", "light-green", "light-pink", "light-purple", "light-red", "light-silver", "light-yellow", "lightest-blue"]
            return ( id > 8 ) ? ColorList[id - 8] : ColorList[id]
        
    }
    return (
        <div className="mw5 dib bg-black-05 br3 pa3 ml2   pa3-ns mv3 ba b--black-10 grow">
            <div className="tc">
                <img src={`https://robohash.org/${id}`} alt="avatar" className={`br-100 h4 w4 dib ba b--black-05 bg-${RandomColor(id)} pa2`} />
                <h2 className="f5 mb2 white-80">
                    {name}
                </h2>
                <p className="f7 light-blue mb0 fw6 ">
                    {email}
                </p>
            </div>
        </div>
    )
}

export default Card
