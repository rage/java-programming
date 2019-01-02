export function tryToScrollToSelector(selector) {
  if (typeof window === "undefined") {
    return
  }
  try {
    const element = document.querySelector(selector)
    if (!element) {
      console.warn("Could not find the element to scroll to.")
      return
    }
    element.scrollIntoView()
  } catch (e) {
    console.warn("Could not scroll element into view", e)
  }
}
