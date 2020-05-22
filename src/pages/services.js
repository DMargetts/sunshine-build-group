import React from "react"

import Layout from "../components/layout"

const Services = ({ data }) => (
  <Layout
    heading="this is a services page"
    header={data.file.childImageSharp.fluid}
  >
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
  </Layout>
)
export const query = graphql`
  query {
    file(relativePath: { eq: "service.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default Services
