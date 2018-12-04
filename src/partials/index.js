// import importAll from 'import-all.macro'

// function getNamedPartials() {
//   const partials = importAll.sync('./*.js')

//   const namedPartials = {}

//   Object.entries(partials)
//     .filter(([k, _]) => k !== './index.js')
//     .forEach(([k, v]) => {
//       const newKey = toKebabCase(k.replace('./', '').replace('.js', ''))
//       namedPartials[newKey] = v.default
//     })

//   function toKebabCase(string) {
//     return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
//   }
//   return namedPartials
// }

// export default getNamedPartials

import Test from './Test'
import PagesInThisSection from "./PagesInThisSection"
import ProgrammingExercise from "./ProgrammingExercise"

const mapping = {
  "test": Test,
  "pages-in-this-section": PagesInThisSection,
  "programming-exercise": ProgrammingExercise
}

export default () => {
  return mapping
}
