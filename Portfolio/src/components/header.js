import React from 'react'
import {Link} from 'gatsby'
import HeaderStyles from './header.module.scss'

const HeaderComponent = () => {
    return (
        <div className={HeaderStyles.head}>
            <Link className={HeaderStyles.logo} to="/">Chaouf Nassro</Link>
            <nav>
                <ul>
                    <li><Link className={HeaderStyles.link} to="/">Home</Link></li>
                    <li><Link className={HeaderStyles.link} to="/">Services</Link></li>
                    <li><Link className={HeaderStyles.link} to="/">Portfolio</Link></li>
                    <li><Link className={HeaderStyles.link} to="/">Work</Link></li>
                </ul>
            </nav>
            <Link to="/"><button>Contact</button></Link>
        </div>
    )
}

export default HeaderComponent
