import React from "react"
import Styled from "./backgroundExpandStyle.module.scss"

const BackgroundExpand = ({ children }) => (
  <div className={Styled.background}>
    <div className={Styled.container}>{children}</div>
  </div>
)

export default BackgroundExpand
