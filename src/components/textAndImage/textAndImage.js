import React from "react"
import Img from "gatsby-image"

import Styles from "./textAndImageStyles.module.scss"

const TextAndImage = ({ children, image, reverse }) => (
  <div className={reverse ? Styles.reverse : Styles.container}>
    <p className={Styles.paragraph}>{children}</p>

    <Img fluid={image} className={Styles.image} height="100%" width="40%" />
  </div>
)

export default TextAndImage
