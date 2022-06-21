export default function getStudentsByLocation(list, city) {
  if (!Array.isArray(list) || typeof city !== 'string') return [];
  return list.filter((value) => value.location === city);
}
