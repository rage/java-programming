import axios from 'axios'
import { accessToken } from './moocfi'

const BASE_URL = 'https://quiznator.mooc.fi'

export async function fetchManyQuizDetails(quizIds) {
  const res = await axios.post(
    `${BASE_URL}/api/v1/quizzes/stripped`,
    { quizIds },
    { headers: { Authorization: `Bearer ${accessToken()}` } }
  )
  return res.data
}
