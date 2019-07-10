import React from 'react'
import LayoutComponent from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <LayoutComponent>
            <Head title="Contact "/>
            <h1>Contact</h1>
            <p>The best way to reach me is via <a href="/#">@facebook/me</a> Facebook</p>
        </LayoutComponent>
    )
}

export default ContactPage
