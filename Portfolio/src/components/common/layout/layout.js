import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Footer from '../footer/footer'
import Header from '../Header/header'
import './layout.css'

const Layout = ({ children, selected }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title="Michael Cordero | Web Developer"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            {name:"viewport",content:"width=device-width, initial-scale=1"}
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="flex">
        <Header selected={selected}/>
        <div>
          {children}
        </div>
        <Footer selected={selected}/>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
