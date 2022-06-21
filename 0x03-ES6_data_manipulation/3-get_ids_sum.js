export default function getStudentIdsSum(list) {
  return list.reduce((counter, currentObj) => counter + currentObj.id, 0);
}
