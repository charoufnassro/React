import React from 'react'
import FooterComponent from './footer'
import HeaderComponent from './header'

import layoutStyles from './layout.module.scss'


const layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <HeaderComponent />
        {props.children}
      </div>
      <FooterComponent />
    </div>
  )
}

export default layout
