import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/style.scss"
import layoutStyles from "./layoutStyle.module.scss"

const Layout = ({ children, heading }) => {
  return (
    <div>
      <header className={layoutStyles.header}>
        <Header heading={heading} />
      </header>
      <div className={layoutStyles.container}>
        <main>{children}</main>
      </div>
      <footer className={layoutStyles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
