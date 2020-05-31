import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Img from "gatsby-image"

import Modal from "../components/modal/modal"
import TextSection from "../components/textSection/textSection"
import SectionTitle from "../components/sectionTitle/sectionTitle"
import projectStyles from "./pageStyles/projectsStyle.module.scss"
import Slider from "../components/slider/slider"

const Projects = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [modal, setModal] = useState(false)
  const toggle = () => {
    if (window.innerWidth > 834) {
      setModal(true)
    }
  }
  const hide = e => {
    if (e.target.className === "modalStyle-module--modalBackground--2WbAa") {
      setModal(false)
    }
  }
  const setIndex = index => setActiveIndex(index)
  const items = data.allContentfulAsset.edges
  const slides = items.map(item => {
    return <Img fluid={item.node.fluid} />
  })
  return (
    <Layout heading="Projects" header={data.file.childImageSharp.fluid}>
      <SectionTitle>
        <h2>What We Have Done</h2>
      </SectionTitle>
      <TextSection>
        Dolore ipsum magna laborum nisi exercitation est magna ex do nulla
        reprehenderit id laboris. Eiusmod deserunt incididunt anim ex ipsum
        laboris ipsum esse. Laboris culpa ex commodo culpa eu pariatur
        adipisicing consectetur.
      </TextSection>
      <div className={projectStyles.grid}>
        {items.map((item, i) => {
          return (
            <div className={projectStyles.imageContainer}>
              <div
                onClick={() => {
                  toggle()
                  setIndex(i)
                }}
                key={i}
              >
                <Img
                  fluid={item.node.fluid}
                  className={projectStyles.image}
                  key={i}
                />
              </div>
            </div>
          )
        })}
      </div>
      {modal && (
        <Modal hide={hide}>
          <Slider activeIndex={activeIndex}>{slides}</Slider>
        </Modal>
      )}
    </Layout>
  )
}
export const query = graphql`
  query {
    file(relativePath: { eq: "projects.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    allContentfulAsset {
      edges {
        node {
          id
          fluid(maxWidth: 800, maxHeight: 533, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default Projects
