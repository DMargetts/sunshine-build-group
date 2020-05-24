import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Img from "gatsby-image"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Button,
  Modal,
} from "reactstrap"
import TextSection from "../components/textSection/textSection"
import SectionTitle from "../components/sectionTitle/sectionTitle"

const Projects = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const items = [
    {
      src: data.img1.childImageSharp.fluid,
    },
    {
      src: data.img3.childImageSharp.fluid,
    },
    {
      src: data.img4.childImageSharp.fluid,
    },
    {
      src: data.img2.childImageSharp.fluid,
    },
    {
      src: data.img5.childImageSharp.fluid,
    },
  ]

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
        key={item.src}
      >
        <Img fluid={item.src} style={{ height: "300px" }} />
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
        <br />
        <br />
        <Button color="danger" onClick={toggle}>
          Open Projects
        </Button>
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
      </TextSection>
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
    img1: file(relativePath: { eq: "house1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "house2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "house3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "house4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "house5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Projects
