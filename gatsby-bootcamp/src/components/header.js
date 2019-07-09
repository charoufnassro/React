import React from 'react'
import {Link} from 'gatsby'

const HeaderComponent = () => {
  return (
    <div>
      <h2 style={{color: "#fff", fontSize:'30px', textAlign: "center", padding:'15px', margin: "0px", position:"relative",left: "0px", right:'0', top:"0px" , fontWeight: 'bold', background: "gray"}}>BootCamp</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default HeaderComponent
