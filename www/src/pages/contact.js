import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'

const ContactPage = () => (
  <Layout>
    <main>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <h1>Contact us</h1>
      <p>At the moment, we're best reached on <a href="https://twitter.com/trevorhinkle3">Twitter</a>.</p>
    </main>
  </Layout>
)
export default ContactPage
