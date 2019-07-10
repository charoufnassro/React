import React from 'react'
import LayoutComponent from '../components/layout'
import {Link} from 'gatsby'
import Head from '../components/head'

const NotFound = () => {
    return (
        <LayoutComponent>
            <Head title="Page Not Found "/>
            <h1>Page not found</h1>
            <p><Link to="/">Back Home</Link></p>
        </LayoutComponent>
    )
}

export default NotFound
