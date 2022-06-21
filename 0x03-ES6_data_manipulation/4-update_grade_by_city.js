export default function updateStudentGradeByCity(list, city, newGrades) {
  if (!Array.isArray(list) || !Array.isArray(newGrades) || typeof city !== 'string') {
    return [];
  }
  return list
    .filter((value) => value.location === city)
    .map((value) => {
      const output = value;
      const student = newGrades.find((element) => element.studentId === value.id);
      output.grade = student ? student.grade : 'N/A';
      return output;
    });
}
