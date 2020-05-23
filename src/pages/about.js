import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import TextSection from "../components/textSection/textSection"
import TextAndImage from "../components/textAndImage/textAndImage"
import SectionTitle from "../components/sectionTitle/sectionTitle"
import BackgroundExpand from "../components/backgroundExpand/backgroundExpand"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap"
import Img from "gatsby-image"

const About = ({ data }) => (
  <Layout heading="About us" header={data.file.childImageSharp.fluid}>
    <SectionTitle>
      <h2>Who We Are</h2>
    </SectionTitle>
    <TextSection>
      We are not just another Tampa roofing company. We are a local Tampa
      roofing company. Our customers are more than just people who are going to
      put money in our pockets, they are our friends and family, our neighbours
      and our acquaintances.
    </TextSection>

    <TextAndImage image reverse>
      Because of that, we take our job seriously. If there’s a small hole that
      needs patching, our staff will take the utmost care to ensure that the job
      is done properly the first time so that you won’t have to pay for the same
      repair twice. For larger jobs, we make sure that the team we send has the
      utmost in experience and expertise.
    </TextAndImage>
    <BackgroundExpand>
      <SectionTitle>
        <h2>Meet The Team</h2>
      </SectionTitle>
      <Row>
        <Col sm="3">
          <Card body className="text-center" style={{ border: "none" }}>
            <Img fluid={data.file.childImageSharp.fluid} />
            <CardBody>
              <CardTitle>
                <strong>CEO</strong>
              </CardTitle>
              <CardText>Labore amet</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Card body className="text-center" style={{ border: "none" }}>
            <Img fluid={data.file.childImageSharp.fluid} />
            <CardBody>
              <CardTitle>
                <strong>Supervisor</strong>
              </CardTitle>

              <CardText>Labore amet</CardText>
            </CardBody>
          </Card>
        </Col>

        <Col sm="3">
          <Card body className="text-center" style={{ border: "none" }}>
            <Img fluid={data.file.childImageSharp.fluid} />
            <CardBody>
              <CardTitle>
                <strong>Assistant Supervisor</strong>
              </CardTitle>

              <CardText>Labore amet</CardText>
            </CardBody>
          </Card>
        </Col>

        <Col sm="3">
          <Card body className="text-center" style={{ border: "none" }}>
            <Img fluid={data.file.childImageSharp.fluid} />
            <CardBody>
              <CardTitle>
                <strong>Human Resources</strong>
              </CardTitle>

              <CardText>Labore amet</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </BackgroundExpand>
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
