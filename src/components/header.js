import React from "react"
import Navigation from "./navigation"

import headerStyles from "./headerStyles.module.scss"
const Header = ({ heading }) => (
  <header>
    <Navigation />
    <div className={headerStyles.header}>{heading}</div>
  </header>
)

export default Header
