import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Img from "gatsby-image"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Modal,
} from "reactstrap"
import TextSection from "../components/textSection/textSection"
import SectionTitle from "../components/sectionTitle/sectionTitle"
import projectStyles from "./pageStyles/projectsStyle.module.scss"

const Projects = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)
  const setIndex = index => setActiveIndex(index)

  const items = data.allContentfulAsset.edges

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }
  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.node.id}
      >
        <Img fluid={item.node.fluid} className={projectStyles.carouselSize} />
      </CarouselItem>
    )
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
                <Img fluid={item.node.fluid} className={projectStyles.image} />
              </div>
            </div>
          )
        })}
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </Modal>
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
