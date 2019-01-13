import { fetchProgrammingProgress } from "./moocfi"
import { fetchCrowdsorcererProgress } from "./crowdsorcerer"
import { zip } from "../util/arrays"
import { fetchQuiznatorProgress } from "./quiznator"

export async function fetchProgress() {
  const serviceIdentifiers = ["Ohjelmointitehtävät", "Kyselyt", "Crowdsorcerer"]
  const progressesCollection = await Promise.all([
    fetchProgrammingProgress(),
    fetchQuiznatorProgress(),
    fetchCrowdsorcererProgress(),
  ])
  const progressByGroup = {}

  zip(serviceIdentifiers, progressesCollection).forEach(
    ([identifier, progresses]) => {
      progresses.forEach(progressEntry => {
        if (!progressByGroup[progressEntry.group]) {
          progressByGroup[progressEntry.group] = {}
        }
        progressByGroup[progressEntry.group][identifier] = progressEntry
      })
    },
  )
  return progressByGroup
}
