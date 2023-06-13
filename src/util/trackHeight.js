// Used for animations
import { createGlobalStyle } from "styled-components"

createGlobalStyle`
  .render-element-off-screen-for-measurement {
    position: absolute !important;
    top: -100000px !important;
    height: auto !important;
  }
`

const saveHeight = (element, height) => {
  element.style.setProperty("--calculated-height", height)
}

const calculateElementHeightOffScreen = (element) => {
  return new Promise((resolve) => {
    element.classList.add("render-element-off-screen-for-measurement")
    setTimeout(() => {
      const height = element.getBoundingClientRect().height
      element.classList.remove("render-element-off-screen-for-measurement")
      resolve(height)
    }, 100)
  })
}

const calculateElementHeight = async (element) => {
  let { height } = element.getBoundingClientRect()
  if (height === 0) {
    height = await calculateElementHeightOffScreen(element)
  }
  saveHeight(element, height)
}

export const trackElementHeight = (element) => {
  if (element === null) {
    return
  }
  element.classList.add("track-element-height-changes-for-animations")
  calculateElementHeight(element)
}

export default () => {
  window.addEventListener("resize", () => {
    document
      .querySelectorAll(".track-element-height-changes-for-animations")
      .forEach((e) => {
        calculateElementHeight(e)
      })
  })
}
