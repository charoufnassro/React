import React from 'react'
import Card from './Card'

const CardList = ({R}) =>{
    const List = R.map( info => {
            return <Card key={info.id} id={info.id} name={info.name} email={info.email}/>
        })
    return(
        List
    )
}

export default CardList