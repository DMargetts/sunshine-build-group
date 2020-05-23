import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"

const Projects = ({ data }) => (
  <Layout heading="Projects" header={data.file.childImageSharp.fluid}>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
  </Layout>
)
export const query = graphql`
  query {
    file(relativePath: { eq: "projects.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default Projects
