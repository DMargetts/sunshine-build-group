import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import Layout from "../components/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"
import homeStyles from "./pageStyles/homeStyle.module.scss"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout
      heading="Sunshine Build Group"
      button="show"
      services="show"
      header={data.file.childImageSharp.fluid}
      landing="yes"
    >
      <Helmet>
        <title>Sunshine Build Group</title>
      </Helmet>
      <div className={homeStyles.homeContact}>
        <h2>No Project Too Big Or Too Small</h2>
        <p>
          We provide all the required materials, labor and equipment essential
          to completing any given project. Then, we manage the project for you
          so you don’t have to manage it yourself. From the hiring and managing
          of specialized sub-contractors to ensuring the proper personnel and
          supervision on the job site, we do what it takes to get the job done
          on time and on budget. <br />
          <br />
          Let our team handle the project for you. With our project management
          and onsite supervision, you can confidently focus on other aspects of
          your business, knowing we have you covered. We specialize in keeping
          track of every detail—something essential to make sure the work is
          done right the first time.
        </p>
      </div>
      <div className={homeStyles.homeServices}>
        <div className={homeStyles.card}>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className={homeStyles.card}>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className={homeStyles.card}>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

/**export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`**/
export const query = graphql`
  query {
    file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default IndexPage
