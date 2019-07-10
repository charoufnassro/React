import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import FooterStyles from './footer.module.scss'

const FooterComponent = () => {

    const data = useStaticQuery( graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <div className={FooterStyles.footer}>
            <p>Created by {data.site.siteMetadata.author} 2019</p>
        </div>
    )
}

export default FooterComponent
