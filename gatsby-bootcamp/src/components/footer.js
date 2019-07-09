import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

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
        <div>
            <p>Created by {data.site.siteMetadata.author} 2019</p>
        </div>
    )
}

export default FooterComponent
