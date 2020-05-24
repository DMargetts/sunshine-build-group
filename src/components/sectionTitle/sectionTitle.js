import React from "react"
import SectionStyles from "./SectionTitleStyles.module.scss"

const SectionTitle = ({ children }) => (
  <div className={SectionStyles.title}>
    <h2 className={SectionStyles.titleSize}>{children}</h2>
  </div>
)

export default SectionTitle
