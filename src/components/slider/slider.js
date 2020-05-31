import React, { useState } from "react"
import sliderStyle from "./sliderStyle.module.scss"
const Slider = ({ children, activeIndex }) => {
  const [index, setIndex] = useState(activeIndex)

  const next = () => {
    if (index === children.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0) {
      setIndex(children.length - 1)
    } else {
      setIndex(index - 1)
    }
  }
  return (
    <div className={sliderStyle.slider}>
      <div onClick={() => prev()} className={sliderStyle.left}>
        <h1>&#60;</h1>
      </div>
      <div onClick={() => next()} className={sliderStyle.right}>
        <h1>&#62;</h1>
      </div>
      {children[index]}
    </div>
  )
}

export default Slider
