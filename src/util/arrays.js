export function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten,
    )
  }, [])
}

export function zip(arr, ...arrs) {
  return arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]))
}

export function getCommonElements(array1, array2) {
  return array1.filter((value) => -1 !== array2.indexOf(value))
}
