import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, CardText, CardBody, CardTitle } from "reactstrap"
import TextAndImage from "../components/textAndImage/textAndImage"
import SectionTitle from "../components/sectionTitle/sectionTitle"
import BackgroundExpand from "../components/backgroundExpand/backgroundExpand"
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

              <CardText>
                Labore amet cupidatat anim irure consequat ut eiusmod dolor
                culpa.Eiusmod quis culpa esse est cupidatat qui proident
                incididunt ea eu culpa mollit proident enim.Sunt amet sint sint
                ex do elit laboris aliquip duis deserunt reprehenderit tempor ad
                voluptate.Culpa sit ullamco ad aute reprehenderit dolor aute non
                et qui eu dolor eu ipsum.
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className={homeStyles.card}>
          <Card body className="text-center">
            <CardBody>
              <CardTitle>
                <strong>Loren Ipsum</strong>
              </CardTitle>

              <CardText>
                Labore amet cupidatat anim irure consequat ut eiusmod dolor
                culpa.Eiusmod quis culpa esse est cupidatat qui proident
                incididunt ea eu culpa mollit proident enim.Sunt amet sint sint
                ex do elit laboris aliquip duis deserunt reprehenderit tempor ad
                voluptate.Culpa sit ullamco ad aute reprehenderit dolor aute non
                et qui eu dolor eu ipsum.
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className={homeStyles.card}>
          <Card body className="text-center">
            <CardBody>
              <CardTitle>
                <strong>Loren Ipsum</strong>
              </CardTitle>

              <CardText>
                Labore amet cupidatat anim irure consequat ut eiusmod dolor
                culpa.Eiusmod quis culpa esse est cupidatat qui proident
                incididunt ea eu culpa mollit proident enim.Sunt amet sint sint
                ex do elit laboris aliquip duis deserunt reprehenderit tempor ad
                voluptate.Culpa sit ullamco ad aute reprehenderit dolor aute non
                et qui eu dolor eu ipsum.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
      <SectionTitle>
        <h2>No Project Too Big Or Too Small</h2>
      </SectionTitle>
      <TextAndImage>
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
                <CardText>
                  Laborum pariatur pariatur deserunt sint.Amet reprehenderit in
                  elit nostrud qui Lorem labore anim enim id culpa voluptate
                  enim.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className={homeStyles.card}>
            <Card body className="text-center">
              <CardBody>
                <CardTitle>
                  <strong>24/7 support</strong>
                </CardTitle>
                <CardText>
                  Laborum pariatur pariatur deserunt sint.Amet reprehenderit in
                  elit nostrud qui Lorem labore anim enim id culpa voluptate
                  enim.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className={homeStyles.card}>
            <Card body className="text-center">
              <CardBody>
                <CardTitle>
                  <strong>100% Satisfaction</strong>
                </CardTitle>
                <CardText>
                  Laborum pariatur pariatur deserunt sint.Amet reprehenderit in
                  elit nostrud qui Lorem labore anim enim id culpa voluptate
                  enim.
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </BackgroundExpand>
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
