import React from "react"
import { Helmet } from "react-helmet"
import Header from "../header/header"
import Footer from "../footer/footer"
import "../../styles/style.scss"
import layoutStyles from "./layoutStyle.module.scss"

const Layout = ({ children, heading, button, services, header, landing }) => {
  return (
    <div className={layoutStyles.full}>
      <Helmet>
        <title>Sunshine Build Group</title>
      </Helmet>
      <header className={layoutStyles.header}>
        <Header
          heading={heading}
          button={button}
          services={services}
          header={header}
          landing={landing}
        />
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
