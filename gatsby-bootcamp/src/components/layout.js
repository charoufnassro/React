import React from 'react'
import FooterComponent from './footer'
import HeaderComponent from './header'

const layout = (props) => {
  return (
    <div>
      <HeaderComponent />
      {props.children}
      <FooterComponent />
    </div>
  )
}

export default layout
