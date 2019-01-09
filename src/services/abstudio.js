import axios from "axios"
import { accessToken } from "./moocfi"

const BASE_URL = "https://ab-studio.testmycode.io"

export async function fetchAbGroup(studyId) {
  const res = await axios.get(
    `${BASE_URL}/api/v0/ab_studies/${studyId}/group?oauth_token=${accessToken()}`,
  )
  return res.data
}
