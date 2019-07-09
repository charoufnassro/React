import React from 'react'
import { Link } from 'gatsby'
import LayoutComponent from '../components/layout'
import SEO from '../components/seo'
import '../styles/index.css'

const IndexPage = () => {
  return (
    <LayoutComponent>
      <SEO title="Home | Nassro"/>
      <h1>Hello</h1>
      <h2>I'm nassro, a full-stack developper living in beautiful algeria</h2> 
      <h3><Link to="/contact">Contact me!</Link></h3>
    </LayoutComponent>
  )
}

export default IndexPage
