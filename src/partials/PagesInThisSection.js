import React from 'react'
import PagesContext from '../contexes/PagesContext'
import { nthIndex } from '../util/strings'
import { Link } from 'gatsby'

export default () => (
  <PagesContext.Consumer>
    {value => {
      const currentPath = value.current.path
      let sectionPath = currentPath
      const sectionSeparator = nthIndex(currentPath, '/', 2)
      if (sectionSeparator !== -1) {
        sectionPath = currentPath.substr(0, sectionSeparator)
      }

      const sectionPages = value.all.filter(o =>
        o.path.startsWith(`${sectionPath}/`)
      ).sort((a, b) => {
        a = a.path.toLowerCase();
        b = b.path.toLowerCase();

        return a > b ? 1 : b > a ? -1 : 0;
      })

      return (
        <div>
          <b>Tässä osassa:</b>
          {sectionPages.map((page, i) => (
            <div key={page.path}>
              {i + 1}. <Link to={page.path}>{page.title}</Link>
            </div>
          ))}
        </div>
      )
    }}
  </PagesContext.Consumer>
)
