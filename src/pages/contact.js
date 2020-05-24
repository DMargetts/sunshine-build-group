import React from "react"
import Layout from "../components/layout/layout"
import { Button, Form, FormGroup, Input } from "reactstrap"
import { graphql } from "gatsby"
import TextSection from "../components/textSection/textSection"
import SectionTitle from "../components/sectionTitle/sectionTitle"
import contactStyles from "./pageStyles/contactStyle.module.scss"

const Contact = ({ data }) => (
  <Layout header={data.file.childImageSharp.fluid} heading="Contact Sunshine">
    <SectionTitle>
      <h2>Have some questions?</h2>
    </SectionTitle>
    <div className={contactStyles.contact}>
      <div className={contactStyles.info}>
        <TextSection align="left">
          Feel free to get in touch with us. We are always open to discussing
          new projects, creative ideas or opportunities to be part of your
          visions
        </TextSection>
        <div className={contactStyles.infoItem}>
          <svg
            height="50pt"
            viewBox="0 0 512 512"
            width="50pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m424.472656 301h-113.214844l58.960938-94.078125c13.5625-21.511719 20.734375-46.382813 20.734375-71.921875 0-74.4375-60.5625-135-135-135-74.441406 0-135 60.5625-135 135 0 25.539062 7.167969 50.410156 20.710937 71.886719l58.984376 94.113281h-113.21875l-87.429688 211h511.902344zm-76.933594 120h94.183594l25.277344 61h-111.683594zm-22.46875 61h-138.386718l7.582031-61h123.03125zm104.222657-91h-85.578125l-7.648438-60h68.363282zm-278.339844-256c0-57.898438 47.101563-105 105-105 57.894531 0 105 47.101562 105 105 0 19.867188-5.570313 39.203125-16.132813 55.953125l-88.867187 141.800781-88.890625-141.832031c-10.539062-16.71875-16.109375-36.054687-16.109375-55.921875zm105 254.246094 36.503906-58.246094h13.367188l7.648437 60h-115.480468l7.460937-60h13.996094zm-148.480469-58.246094h67.75l-7.460937 60h-85.152344zm-37.292968 90h93.855468l-7.585937 61h-111.546875zm0 0" />
            <path d="m330.953125 135c0-41.355469-33.644531-75-75-75s-75 33.644531-75 75 33.644531 75 75 75 75-33.644531 75-75zm-120 0c0-24.8125 20.1875-45 45-45s45 20.1875 45 45-20.1875 45-45 45-45-20.1875-45-45zm0 0" />
          </svg>
          <h3>Address</h3>
          <p>1498 Chestnut Street, Tampa, FL</p>
        </div>
        <div className={contactStyles.infoItem}>
          <svg
            height="50"
            viewBox="0 0 512 512"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m367.988 512.021c-16.528 0-32.916-2.922-48.941-8.744-70.598-25.646-136.128-67.416-189.508-120.795s-95.15-118.91-120.795-189.508c-8.241-22.688-10.673-46.108-7.226-69.612 3.229-22.016 11.757-43.389 24.663-61.809 12.963-18.501 30.245-33.889 49.977-44.5 21.042-11.315 44.009-17.053 68.265-17.053 7.544 0 14.064 5.271 15.645 12.647l25.114 117.199c1.137 5.307-.494 10.829-4.331 14.667l-42.913 42.912c40.482 80.486 106.17 146.174 186.656 186.656l42.912-42.913c3.838-3.837 9.361-5.466 14.667-4.331l117.199 25.114c7.377 1.581 12.647 8.101 12.647 15.645 0 24.256-5.738 47.224-17.054 68.266-10.611 19.732-25.999 37.014-44.5 49.977-18.419 12.906-39.792 21.434-61.809 24.663-6.899 1.013-13.797 1.518-20.668 1.519zm-236.349-479.321c-31.995 3.532-60.393 20.302-79.251 47.217-21.206 30.265-26.151 67.49-13.567 102.132 49.304 135.726 155.425 241.847 291.151 291.151 34.641 12.584 71.866 7.64 102.132-13.567 26.915-18.858 43.685-47.256 47.217-79.251l-95.341-20.43-44.816 44.816c-4.769 4.769-12.015 6.036-18.117 3.168-95.19-44.72-172.242-121.772-216.962-216.962-2.867-6.103-1.601-13.349 3.168-18.117l44.816-44.816z" />
            </g>
          </svg>

          <h3>Phone</h3>
          <p>(234) 567-8910</p>
        </div>
        <div className={contactStyles.infoItem}>
          <svg
            height="50"
            viewBox="0 0 479.058 479.058"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
          </svg>
          <h3>Email</h3>
          <p>fake@fake.com</p>
        </div>
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
          <Button className={contactStyles.button} color="danger">
            Send
          </Button>
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
