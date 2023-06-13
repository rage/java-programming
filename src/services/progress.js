import { fetchProgrammingProgress, getCachedUserDetails } from "./moocfi"
import { zip } from "../util/arrays"
import { fetchQuizProgress } from "./quiznator"
import { fetchQuizzesProgress } from "./quizzes"

const introductionCourseGroups = [
  "osa01",
  "osa02",
  "osa03",
  "osa04",
  "osa05",
  "osa06",
  "osa07",
]

export async function fetchProgress() {
  // await fetchQuizzesProgress()
  const serviceIdentifiers = ["Programming exercises", "Quizzes"]
  const progressesCollection = await Promise.all([
    fetchProgrammingProgress(),
    fetchQuizzesProgress(),
  ])
  const userDetails = await getCachedUserDetails()
  const currentCourseVariant = userDetails?.extra_fields?.course_variant
  const progressByGroup = {}

  zip(serviceIdentifiers, progressesCollection).forEach(
    ([identifier, progresses]) => {
      console.log(JSON.stringify(progresses))
      progresses.forEach((progressEntry) => {
        const group = progressEntry.group.replace("osa", "part")
        if (!progressByGroup[group]) {
          progressByGroup[group] = {}
        }
        progressByGroup[group][identifier] = progressEntry
      })
    },
  )
  const toBeDeleted = []
  Object.entries(progressByGroup).forEach(([group, serviceEntries]) => {
    if (
      !Object.keys(serviceEntries).find((o) => o === "Programming exercises")
    ) {
      toBeDeleted.push(group)
    }
  })
  if (
    currentCourseVariant === "ohja-dl" ||
    currentCourseVariant === "ohja-nodl"
  ) {
    introductionCourseGroups.forEach((group) => toBeDeleted.push(group))
  }
  toBeDeleted.forEach((o) => {
    delete progressByGroup[o]
  })
  return progressByGroup
}
