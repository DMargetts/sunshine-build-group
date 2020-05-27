import React from "react"
import Navigation from "../navigation/navigation"
import { Button } from "reactstrap"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

import headerStyles from "./headerStyles.module.scss"

const Header = ({ heading, button, header, landing }) => {
  return (
    <BackgroundImage
      fluid={header}
      alt=""
      className={`${headerStyles.header} ${landing ? headerStyles.height : ""}`}
    >
      <div className={headerStyles.darken}>
        <Navigation />
        <div className={headerStyles.container}>
          <div
            className={landing ? headerStyles.landingLeft : headerStyles.left}
          >
            <h1>{heading}</h1>
            {button && (
              <Link to="projects">
                <Button
                  style={{
                    background: "tomato",
                    border: "none",
                  }}
                >
                  VIEW OUR WORK
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Header
