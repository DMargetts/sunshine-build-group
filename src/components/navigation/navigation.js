import React from "react"
import { Link } from "gatsby"
import { Button } from "reactstrap"
import navStyles from "./navigationStyle.module.scss"

const Navigation = () => {
  let activeLink =
    window.location.href !== "http://localhost:8000/"
      ? window.location.href.match(/\/\w+$/).join("")
      : ";"
  return (
    <nav className={navStyles.navigation}>
      <Link to="/">Logo goes here</Link>
      <ul>
        <li>
          <Link
            to="/about"
            name="about"
            className={activeLink === "/about" ? navStyles.active : ""}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            name="services"
            className={activeLink === "/services" ? navStyles.active : ""}
          >
            SERVICES
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            name="projects"
            className={activeLink === "/projects" ? navStyles.active : ""}
          >
            PROJECTS
          </Link>
        </li>
      </ul>

      <Link to="/contact" className={navStyles.contactButton}>
        <Button color="danger">CONTACT US</Button>
      </Link>
    </nav>
  )
}

export default Navigation
