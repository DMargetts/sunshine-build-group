import React from "react"
import { Link } from "gatsby"
import { Button } from "reactstrap"
import navStyles from "./navigationStyle.module.scss"

const Navigation = () => (
  <nav className={navStyles.navigation}>
    <Link to="/">Logo goes here</Link>
    <ul>
      <li>
        <Link to="/about">ABOUT</Link>
      </li>
      <li>
        <Link to="/services">SERVICES</Link>
      </li>
      <li>
        <Link to="/projects">PROJECTS</Link>
      </li>
    </ul>

    <Link to="/contact" className={navStyles.contactButton}>
      <Button color="danger">CONTACT US</Button>
    </Link>
  </nav>
)

export default Navigation
