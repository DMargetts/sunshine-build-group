import React from "react"

import Layout from "../components/layout"

const About = ({ data }) => (
  <Layout
    heading="this is a about page"
    header={data.file.childImageSharp.fluid}
  >
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
  </Layout>
)
export const query = graphql`
  query {
    file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default About
