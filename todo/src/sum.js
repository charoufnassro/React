import React from 'react'

export default class sum extends React.Component {
    render(){
        return true
    }
}

export function AdditionFunction(value) {
    return value.reduce((total, val)=> total + val,0) 
    
}