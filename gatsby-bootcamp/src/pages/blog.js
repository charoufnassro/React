import React from 'react'
import LayoutComponent from '../components/layout'
import {graphql, useStaticQuery} from 'gatsby'

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
          html
          excerpt
        }
      }
    }
  }
  `)
    return(
        <LayoutComponent>
          <h1>  Blog Page </h1>
          <p>Blog post will be show here</p>
        
          <ol>{
                data.allMarkdownRemark.edges.map((edge)=> {
                  return (
                    <li>
                      <h2>{edge.node.frontmatter.title}</h2>
                      <p>{edge.node.frontmatter.date}</p>
                    </li>
                  )
                })
          }
          </ol>
        </LayoutComponent>
    )
}

export default BlogPage