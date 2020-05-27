import React from "react"
import SectionStyles from "./SectionTitleStyles.module.scss"

const SectionTitle = ({ children }) => (
  <div className={SectionStyles.title}>{children}</div>
)

export default SectionTitle
