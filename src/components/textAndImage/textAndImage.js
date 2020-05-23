import React from "react"
import Img from "gatsby-image"

import Styles from "./textAndImageStyles.module.scss"

const TextAndImage = ({ children, image, reverse }) => (
  <div className={reverse ? Styles.reverse : Styles.container}>
    <p className={Styles.paragraph}>{children}</p>
    <div style={{ height: "400px", width: "500px", background: "red" }}></div>
  </div>
)

export default TextAndImage
