import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import TextAndImage from "../components/textAndImage/textAndImage"
import TextSection from "../components/textSection/textSection"
import SectionTitle from "../components/sectionTitle/sectionTitle"
import ServicesStyles from "./pageStyles/servicesStyle.module.scss"

const Services = ({ data }) => {
  const [tab, setTab] = useState(
    <>
      <TextAndImage image={data.tab1.childImageSharp.fluid}>
        {data.content.edges[0].node.service1.service1}
      </TextAndImage>
    </>
  )
  const [activeBtn, setActiveBtn] = useState("1")

  const showTab = e => {
    if (e.target.name === "1") {
      setActiveBtn("1")
      setTab(
        <>
          <TextAndImage image={data.tab1.childImageSharp.fluid}>
            {data.content.edges[0].node.service1.service1}
          </TextAndImage>
        </>
      )
    }

    if (e.target.name === "2") {
      setActiveBtn("2")
      setTab(
        <>
          <TextAndImage image={data.tab2.childImageSharp.fluid}>
            {data.content.edges[0].node.service2.service2}
            officia.
          </TextAndImage>
        </>
      )
    }

    if (e.target.name === "3") {
      setActiveBtn("3")
      setTab(
        <>
          <TextAndImage image={data.tab3.childImageSharp.fluid}>
            {data.content.edges[0].node.service3.service3}
          </TextAndImage>
        </>
      )
    }
  }
  return (
    <Layout
      heading="Services We Offer"
      header={data.head.childImageSharp.fluid}
    >
      <SectionTitle>
        <h2>Services</h2>
      </SectionTitle>
      <TextSection>{data.content.edges[0].node.services.services}</TextSection>
      <div className={ServicesStyles.tabs}>
        <button
          className={
            activeBtn === "1" ? ServicesStyles.active : ServicesStyles.disabled
          }
          name="1"
          onClick={showTab}
        >
          Tab 1
        </button>
        <button
          className={
            activeBtn === "2" ? ServicesStyles.active : ServicesStyles.disabled
          }
          name="2"
          onClick={showTab}
        >
          Tab 2
        </button>
        <button
          className={
            activeBtn === "3" ? ServicesStyles.active : ServicesStyles.disabled
          }
          name="3"
          onClick={showTab}
        >
          Tab 3
        </button>
      </div>
      {tab}
    </Layout>
  )
}
export const [head, tab1, tab2, tab3] = graphql`
  query {
    head: file(relativePath: { eq: "service.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    tab1: file(relativePath: { eq: "values.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tab2: file(relativePath: { eq: "whoweare.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tab3: file(relativePath: { eq: "services3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    content: allContentfulServices {
      edges {
        node {
          service1 {
            service1
          }
          service2 {
            service2
          }
          service3 {
            service3
          }
          services {
            services
          }
        }
      }
    }
  }
`

export default Services
