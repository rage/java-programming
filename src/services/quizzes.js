import axios from "axios"
import { accessToken } from "./moocfi"
import CourseSettings from "../../course-settings"

const id = CourseSettings.default.quizzesId
const language = CourseSettings.default.language

const quizzesLanguage = language === "en" ? "en_US" : "fi_FI"

export async function fetchQuizzesProgress() {
  const response = await axios.get(
    `https://quizzes.mooc.fi/api/v1/courses/${id}/users/current/progress`,
    { headers: { Authorization: `Bearer ${accessToken()}` } },
  )
  return response.data?.points_by_group
}

export async function fetchQuizNames() {
  const response = await axios.get(
    `https://quizzes.mooc.fi/api/v1/quizzes/${id}/titles/${quizzesLanguage}`,
  )
  return response.data
}
