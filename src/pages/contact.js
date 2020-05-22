import React from "react"
import Layout from "../components/layout"
import { Button, Form, FormGroup, Input } from "reactstrap"

import contactStyles from "./pageStyles/contactStyle.module.scss"

const Contact = ({ data }) => (
  <Layout header={data.file.childImageSharp.fluid} heading="Contact Sunshine">
    <div className={contactStyles.contact}>
      <h1>Have some questions?</h1>
      <div className={contactStyles.info}>
        <p>
          Feel free to get in touch with us. We are always open to discussing
          new projects, creative ideas or opportunities to be part of your
          visions
        </p>
        <h3>Address</h3>
        <p>1498 Chestnut Street, Tampa, FL</p>
        <h3>Phone</h3>
        <p>(234) 567-8910</p>
        <h3>Email</h3>
        <p>fake@fake.com</p>
      </div>
      <div className={contactStyles.form}>
        <Form>
          <FormGroup>
            <Input type="text" name="name" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Input type="email" name="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Input
              style={{ height: "200px" }}
              type="textarea"
              name="text"
              placeholder="Message"
            />
          </FormGroup>
          <Button color="danger">Send</Button>
        </Form>
      </div>
    </div>
  </Layout>
)
export const query = graphql`
  query {
    file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default Contact
