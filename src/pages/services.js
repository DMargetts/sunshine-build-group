import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import TextAndImage from "../components/textAndImage/textAndImage"
import TextSection from "../components/textSection/textSection"
import SectionTitle from "../components/sectionTitle/sectionTitle"
import { Button } from "reactstrap"
import ServicesStyles from "./pageStyles/servicesStyle.module.scss"
import BackgroundExpand from "../components/backgroundExpand/backgroundExpand"

const Services = ({ data }) => {
  const [tab, setTab] = useState(
    <>
      <SectionTitle>
        <h2>Service 1</h2>
      </SectionTitle>
      <TextAndImage image>
        Commodo fugiat minim minim incididunt proident ut eiusmod duis ea sunt
        amet deserunt do dolore. Velit amet do voluptate dolore nulla. Occaecat
        ipsum nisi laboris est incididunt do aute tempor elit occaecat commodo
        aliqua. Qui dolor Lorem dolore irure proident reprehenderit amet laborum
        duis ipsum. Adipisicing labore et incididunt elit occaecat dolore. Magna
        minim fugiat ullamco commodo esse dolor esse laboris dolore sunt veniam
        officia. <br />
        <br />
        Commodo fugiat minim minim incididunt proident ut eiusmod duis ea sunt
        amet deserunt do dolore. Velit amet do voluptate dolore nulla. Occaecat
        ipsum nisi laboris est incididunt do aute tempor elit occaecat commodo
        aliqua. Qui dolor Lorem dolore irure proident reprehenderit amet laborum
        duis ipsum. Adipisicing labore et incididunt elit occaecat dolore. Magna
        minim fugiat ullamco commodo esse dolor esse laboris dolore sunt veniam
        officia.
      </TextAndImage>
    </>
  )
  const [activeBtn, setActiveBtn] = useState("1")

  const showTab = e => {
    if (e.target.name === "1") {
      setActiveBtn("1")
      setTab(
        <>
          <SectionTitle>
            <h2>Service 1</h2>
          </SectionTitle>
          <TextAndImage image>
            Commodo fugiat minim minim incididunt proident ut eiusmod duis ea
            sunt amet deserunt do dolore. Velit amet do voluptate dolore nulla.
            Occaecat ipsum nisi laboris est incididunt do aute tempor elit
            occaecat commodo aliqua. Qui dolor Lorem dolore irure proident
            reprehenderit amet laborum duis ipsum. Adipisicing labore et
            incididunt elit occaecat dolore. Magna minim fugiat ullamco commodo
            esse dolor esse laboris dolore sunt veniam officia. <br />
            <br />
            Commodo fugiat minim minim incididunt proident ut eiusmod duis ea
            sunt amet deserunt do dolore. Velit amet do voluptate dolore nulla.
            Occaecat ipsum nisi laboris est incididunt do aute tempor elit
            occaecat commodo aliqua. Qui dolor Lorem dolore irure proident
            reprehenderit amet laborum duis ipsum. Adipisicing labore et
            incididunt elit occaecat dolore. Magna minim fugiat ullamco commodo
            esse dolor esse laboris dolore sunt veniam officia.
          </TextAndImage>
        </>
      )
    }

    if (e.target.name === "2") {
      setActiveBtn("2")
      setTab(
        <>
          <SectionTitle>
            <h2>Service 2</h2>
          </SectionTitle>
          <TextAndImage image>
            Commodo fugiat minim minim incididunt proident ut eiusmod duis ea
            sunt amet deserunt do dolore. Velit amet do voluptate dolore nulla.
            Occaecat ipsum nisi laboris est incididunt do aute tempor elit
            occaecat commodo aliqua. Qui dolor Lorem dolore irure proident
            reprehenderit amet laborum duis ipsum. Adipisicing labore et
            incididunt elit occaecat dolore. Magna minim fugiat ullamco commodo
            esse dolor esse laboris dolore sunt veniam officia.
          </TextAndImage>
        </>
      )
    }

    if (e.target.name === "3") {
      setActiveBtn("3")
      setTab(
        <>
          <SectionTitle>
            <h2>Service 3</h2>
          </SectionTitle>
          <TextAndImage image>
            Commodo fugiat minim minim incididunt proident ut eiusmod duis ea
            sunt amet deserunt do dolore. Velit amet do voluptate dolore nulla.
            Occaecat ipsum nisi laboris est incididunt do aute tempor elit
            occaecat commodo aliqua. Qui dolor Lorem dolore irure proident
            reprehenderit amet laborum duis ipsum. Adipisicing labore et
            incididunt elit occaecat dolore. Magna minim fugiat ullamco commodo
            esse dolor esse laboris dolore sunt veniam officia.
          </TextAndImage>
        </>
      )
    }
  }
  return (
    <Layout
      heading="Services We Offer"
      header={data.file.childImageSharp.fluid}
    >
      <SectionTitle>
        <h2>Services</h2>
      </SectionTitle>
      <TextSection>
        Ullamco voluptate velit in dolor irure. Laborum esse laborum aliquip
        elit exercitation. Mollit ipsum mollit laboris minim sint et proident
        consequat voluptate. Eu voluptate cillum Lorem anim. Quis id nulla nisi
        dolore. Consectetur id sunt tempor laborum pariatur qui nostrud. Mollit
        Lorem magna occaecat officia laboris.
      </TextSection>
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
