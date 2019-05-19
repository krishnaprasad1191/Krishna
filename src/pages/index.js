import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {  Location } from '@reach/router';

// Adding Styles
import './../scss/app.scss'
import LayoutWrapper from "../components/layoutWrapper";

const IndexPage = ({ data }) => {

  const about = data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.title === 'About');

  return (
    <LayoutWrapper>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `portfolio`, `personal website`, `blog`]} />
      <div className="main__content">
        {/* Hero Section */}
        <div className="main__sec">
          <h3 className="main__author-subhead center">Hi there! I'm</h3>
          <h1 className="main__author-head center">{ data.site.siteMetadata.title }</h1>
          <p className="main__author-experct">{ about[0].node.excerpt }
          <br/><Link to="/about" className="main__content-link">read more...</Link></p>
        </div>
      </div>
    </LayoutWrapper>
  )
}

export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark {
    edges {
      node {
        excerpt
        frontmatter{
          title
        }
      }
    }
  }
}
`

export default IndexPage
