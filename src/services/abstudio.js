import axios from "axios"
import { accessToken } from "./moocfi"

const BASE_URL = "https://www.mooc.fi"

export async function fetchAbGroup(studyId) {
  const res = await axios.get(`${BASE_URL}/api/ab-enrollments/${studyId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken()}`,
    },
  })
  return res.data
}
