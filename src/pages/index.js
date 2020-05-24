import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, CardText, CardBody, CardTitle } from "reactstrap"
import TextAndImage from "../components/textAndImage/textAndImage"
import SectionTitle from "../components/sectionTitle/sectionTitle"
import BackgroundExpand from "../components/backgroundExpand/backgroundExpand"
import homeStyles from "./pageStyles/homeStyle.module.scss"

const IndexPage = ({ data }) => {
  return (
    <Layout
      heading="Sunshine Build Group"
      button="show"
      services="show"
      header={data.head.childImageSharp.fluid}
      landing="yes"
    >
      <SectionTitle>
        <h2>Services</h2>
      </SectionTitle>
      <div className={homeStyles.homeServices}>
        <div className={homeStyles.card}>
          <Card body className="text-center">
            <CardBody>
              <CardTitle>
                <strong>Loren Ipsum</strong>
              </CardTitle>

              <CardText>{data.content.edges[0].node.service1}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className={homeStyles.card}>
          <Card body className="text-center">
            <CardBody>
              <CardTitle>
                <strong>Loren Ipsum</strong>
              </CardTitle>

              <CardText>{data.content.edges[0].node.service2}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className={homeStyles.card}>
          <Card body className="text-center">
            <CardBody>
              <CardTitle>
                <strong>Loren Ipsum</strong>
              </CardTitle>

              <CardText>{data.content.edges[0].node.service3}</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
      <SectionTitle>
        <h2>No Project Too Big Or Too Small</h2>
      </SectionTitle>
      <TextAndImage image={data.about.childImageSharp.fluid}>
        {data.content.edges[0].node.about.about}
      </TextAndImage>
      <BackgroundExpand>
        <SectionTitle>
          <h2>Why Us</h2>
        </SectionTitle>
        <div className={homeStyles.homeServices}>
          <div className={homeStyles.card}>
            <Card body className="text-center">
              <CardBody>
                <CardTitle>
                  <strong>Certified Professionals</strong>
                </CardTitle>
                <CardText>{data.content.edges[0].node.certified}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className={homeStyles.card}>
            <Card body className="text-center">
              <CardBody>
                <CardTitle>
                  <strong>24/7 support</strong>
                </CardTitle>
                <CardText>{data.content.edges[0].node.support}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className={homeStyles.card}>
            <Card body className="text-center">
              <CardBody>
                <CardTitle>
                  <strong>100% Satisfaction</strong>
                </CardTitle>
                <CardText>{data.content.edges[0].node.satisfaction}</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </BackgroundExpand>
    </Layout>
  )
}

export const [head, about] = graphql`
  query {
    head: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    about: file(relativePath: { eq: "homeAbout2.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    content: allContentfulHome {
      edges {
        node {
          about {
            about
          }
          service1
          service2
          service3
          support
          satisfaction
          certified
        }
      }
    }
  }
`

export default IndexPage
