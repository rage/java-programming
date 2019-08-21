import axios from "axios"
import { accessToken } from "./moocfi"

export async function fetchQuizzesProgress() {
  const response = await axios.get(
    "https://quizzes.mooc.fi/api/v1/courses/38240a7b-7e64-4202-91e2-91f6d46f6198/users/current/progress",
    { headers: { Authorization: `Bearer ${accessToken()}` } },
  )
  return response.data?.points_by_group
}

export async function fetchQuizNames() {
  const response = await axios.get(
    "https://quizzes.mooc.fi/api/v1/quizzes/38240a7b-7e64-4202-91e2-91f6d46f6198/titles/fi_FI",
  )
  return response.data
}
