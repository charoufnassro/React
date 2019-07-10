import React from 'react'
import LayoutComponent from '../components/layout'
import {graphql} from 'gatsby'
import Head from '../components/head'

export const query = graphql`
    query($slug: String){
        markdownRemark( fields: { slug: { eq: $slug }}){
            frontmatter {
                title
                date
            }
            html
        }
    }
`

const blog = (props) => {
    return (
        <LayoutComponent>
            <Head title={props.data.markdownRemark.frontmatter.title}/>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}>

            </div>
        </LayoutComponent>
    )
}

export default blog
