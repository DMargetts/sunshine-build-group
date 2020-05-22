import React from "react"
import Navigation from "./navigation"
import { Button } from "reactstrap"
import BackgroundImage from "gatsby-background-image"
import { graphql, Link } from "gatsby"

import headerStyles from "./headerStyles.module.scss"

const Header = ({ heading, button, services, data, header, landing }) => {
  console.log(header)
  return (
    <BackgroundImage
      fluid={header}
      alt=""
      className={`${headerStyles.header} ${landing ? headerStyles.height : ""}`}
    >
      <Navigation />
      <div className={headerStyles.container}>
        <div className={landing ? headerStyles.landingLeft : headerStyles.left}>
          <h1>{heading}</h1>
          {button && (
            <Link to="projects">
              <Button color="danger">VIEW OUR WORK</Button>
            </Link>
          )}
        </div>
        {services && (
          <div className={headerStyles.services}>
            <h2>Our Services</h2>
            <ul>
              <li>Commercial Services</li>
              <li>Site Management</li>
              <li>Government Contracting</li>
              <li>Industrial Services</li>
            </ul>
          </div>
        )}
      </div>
    </BackgroundImage>
  )
}
export const query = graphql`
  query {
    file(relativePath: { eq: "construction-icon-1-white.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default Header
