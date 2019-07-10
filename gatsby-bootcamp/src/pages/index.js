import React from 'react'
import { Link } from 'gatsby'
import LayoutComponent from '../components/layout'
import '../styles/index.scss'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <LayoutComponent>
      <Head title="Home "/>
      <h1>Hello</h1>
      <h2>I'm nassro, a full-stack developper living in beautiful algeria</h2> 
      <p>Need a developer ?<Link to="/contact">Contact me!</Link></p>
    </LayoutComponent>
  )
}

export default IndexPage
