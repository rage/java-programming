import React from "react"
import PartProgress from "./PartProgress"
import CourseSettings from "../../../course-settings"

const splitCourses = CourseSettings.default.splitCourses
const CourseProgress = ({
  data,
  appliesForStudyRight,
  currentCourseVariant,
}) => {
  return (
    data &&
    (currentCourseVariant === "ohja-dl" ||
    currentCourseVariant === "ohja-nodl" ? (
      <div>
        <h4>Ohjelmoinnin jatkokurssi</h4>
        {Object.entries(data).map(([name, data]) => {
          return (
            <PartProgress
              appliesForStudyRight={appliesForStudyRight}
              name={name}
              data={data}
            />
          )
        })}
      </div>
    ) : (
      <div>
        {splitCourses && <h4>Ohjelmoinnin perusteet</h4>}
        {Object.entries(data).map(([name, data]) => {
          if (name === "osa08" && splitCourses) {
            return (
              <div>
                <h4>Ohjelmoinnin jatkokurssi</h4>
                <PartProgress
                  appliesForStudyRight={appliesForStudyRight}
                  name={name}
                  data={data}
                />
              </div>
            )
          } else {
            return (
              <PartProgress
                appliesForStudyRight={appliesForStudyRight}
                name={name}
                data={data}
              />
            )
          }
        })}
      </div>
    ))
  )
}

export default CourseProgress
