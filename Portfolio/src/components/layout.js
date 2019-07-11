import React from 'react'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'


const LayoutComponent = (props) => {
    return (
        <div>
            <HeaderComponent />
                {props.children}
            <FooterComponent />
        </div>
        
    )
}

export default LayoutComponent
