export function nthIndex(str, pat, n) {
  var L = str.length,
    i = -1
  while (n-- && i++ < L) {
    i = str.indexOf(pat, i)
    if (i < 0) break
  }
  return i
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function normalizeExerciseId(string) {
  return encodeURIComponent(
    string
      .toLowerCase()
      .replace(/ö/g, "o")
      .replace(/Ö/g, "O")
      .replace(/ä/g, "a")
      .replace(/Ä/g, "A")
      .replace(/\s+/g, "-")
      .replace(/[^A-Za-z0-9_-]/g, ""),
  )
}
