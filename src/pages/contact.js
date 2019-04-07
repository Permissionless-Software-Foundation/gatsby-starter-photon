import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

class Contact extends React.Component {
  render() {
    const siteTitle = 'Contact | Permissionless Software Foundation'

    return (
      <Layout>
        <Helmet title={siteTitle} />
        <h1>Contact</h1>
        <p>
          The Permissionless Software Foundation is more of a loose network of
          libertarian cypherpunks who love to discuss technology, as opposed
          to a conventional organization. Most of the action happens in our
          chat room. Jump in and join the conversation!
        </p>
      </Layout>
    )
  }
}

export default Contact
