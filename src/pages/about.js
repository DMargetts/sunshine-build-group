import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import TextSection from "../components/textSection/textSection"
import TextAndImage from "../components/textAndImage/textAndImage"
import SectionTitle from "../components/sectionTitle/sectionTitle"
import BackgroundExpand from "../components/backgroundExpand/backgroundExpand"
import { Card, CardText, CardBody, CardTitle } from "reactstrap"
import Img from "gatsby-image"
import aboutStyles from "./pageStyles/aboutStyle.module.scss"

const About = ({ data }) => (
  <Layout heading="About us" header={data.head.childImageSharp.fluid}>
    <SectionTitle>
      <h2>Who We Are</h2>
    </SectionTitle>
    <TextSection>{data.content.edges[0].node.whoWeAre.whoWeAre}</TextSection>

    <TextAndImage image={data.about.childImageSharp.fluid} reverse>
      {data.content.edges[0].node.whoWeAreExtended.whoWeAreExtended}
    </TextAndImage>
    <BackgroundExpand>
      <SectionTitle>
        <h2>Meet The Team</h2>
      </SectionTitle>
      <div className={aboutStyles.team}>
        <div className={aboutStyles.card}>
          <Card body className="text-center" style={{ border: "none" }}>
            <Img fluid={data.team1.childImageSharp.fluid} />
            <CardBody>
              <CardTitle>
                <strong>CEO</strong>
              </CardTitle>
              <CardText>Labore amet</CardText>
            </CardBody>
          </Card>
        </div>
        <div className={aboutStyles.card}>
          <Card body className="text-center" style={{ border: "none" }}>
            <Img fluid={data.team2.childImageSharp.fluid} />
            <CardBody>
              <CardTitle>
                <strong>Supervisor</strong>
              </CardTitle>

              <CardText>Labore amet</CardText>
            </CardBody>
          </Card>
        </div>
        <div className={aboutStyles.card}>
          <Card body className="text-center" style={{ border: "none" }}>
            <Img fluid={data.team3.childImageSharp.fluid} />
            <CardBody>
              <CardTitle>
                <strong>Assistant Supervisor</strong>
              </CardTitle>

              <CardText>Labore amet</CardText>
            </CardBody>
          </Card>
        </div>
        <div className={aboutStyles.card}>
          <Card body className="text-center" style={{ border: "none" }}>
            <Img fluid={data.team4.childImageSharp.fluid} />
            <CardBody>
              <CardTitle>
                <strong>Human Resources</strong>
              </CardTitle>

              <CardText>Labore amet</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </BackgroundExpand>
  </Layout>
)
export const [head, about, team1, team2, team3, team4] = graphql`
  query {
    head: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    about: file(relativePath: { eq: "Aboutus-image.png" }) {
      childImageSharp {
        fluid(maxWidth: 888, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    team1: file(relativePath: { eq: "ceo2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 588, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    team2: file(relativePath: { eq: "supervisor2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 588, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    team3: file(relativePath: { eq: "assistant2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 588, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    team4: file(relativePath: { eq: "hr.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 588, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    content: allContentfulAbout {
      edges {
        node {
          whoWeAre {
            whoWeAre
          }
          whoWeAreExtended {
            whoWeAreExtended
          }
        }
      }
    }
  }
`

export default About
