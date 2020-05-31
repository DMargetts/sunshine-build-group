import React from "react"
import modalStyle from "./modalStyle.module.scss"
const modal = ({ children, hide }) => {
  return (
    <div className={modalStyle.modalBackground} onClick={hide} value="window">
      <div className={modalStyle.modal}>{children}</div>
    </div>
  )
}

export default modal
