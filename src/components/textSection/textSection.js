import React from "react"
import textStyles from "./textSectionsStyles.module.scss"
const TextSection = ({ children, align }) => (
  <div>
    <p
      className={
        align === "left" ? textStyles.alignLeft : textStyles.alignCenter
      }
    >
      {children}
    </p>
  </div>
)

export default TextSection
