export default function hasValuesFromArray(set, arr) {
  return arr.filter((x) => set.has(x)).length === arr.length;
}
