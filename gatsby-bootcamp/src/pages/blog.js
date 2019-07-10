import React from 'react'
import LayoutComponent from '../components/layout'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Head from '../components/head'

import BlogStyles from './blog.module.scss'

const BlogPage = () =>{

  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `)
    return(
        <LayoutComponent>
          <Head title="Blog "/>
          <h1>  Blog Page </h1>
          <p>Blog post will be show here</p>
        
          <ol className={BlogStyles.posts}>{
                data.allMarkdownRemark.edges.map((edge)=> {
                  return (
                    <li className={BlogStyles.post}>
                      <Link to ={`/blog/${edge.node.fields.slug}`}>
                      <h2>{edge.node.frontmatter.title}</h2>
                      <p>{edge.node.frontmatter.date}</p></Link>
                    </li>
                  )
                })
          }
          </ol>
        </LayoutComponent>
    )
}

export default BlogPage