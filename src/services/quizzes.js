import axios from "axios"
import { accessToken, getCourseVariant } from "./moocfi"
import CourseSettings from "../../course-settings"

// const id = CourseSettings.quizzesId
const language = CourseSettings.default.language

const quizzesLanguage = language === "en" ? "en_US" : "fi_FI"

export async function fetchQuizzesProgress() {
  let id = CourseSettings.default.quizzesId
  const courseVariant = await getCourseVariant()

  if (courseVariant === "ii") {
    id = "7d32559c-5b3d-4c30-bd8e-11e8408359fd"
  }
  const response = await axios.get(
    `https://quizzes.mooc.fi/api/v1/courses/${id}/users/current/progress`,
    { headers: { Authorization: `Bearer ${accessToken()}` } },
  )
  return response.data?.points_by_group
}

export async function fetchQuizNames() {
  let id = CourseSettings.default.quizzesId
  const courseVariant = await getCourseVariant()

  if (courseVariant === "ii") {
    id = "7d32559c-5b3d-4c30-bd8e-11e8408359fd"
  }

  const response = await axios.get(
    `https://quizzes.mooc.fi/api/v1/quizzes/${id}/titles/${quizzesLanguage}`,
  )
  return response.data
}
