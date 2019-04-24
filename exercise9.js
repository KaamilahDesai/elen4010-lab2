'use strict'

let students = [
  {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4
  },
  {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3
  },
  {
    name: 'Jade',
    studentNumber: 678343,
    yearOfStudy: 4
  },
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4
  }
]

console.log(students)

const deleteStudent = function (aStudent, studentArray) {
  const index = studentArray.findIndex(function (element) {
    return element.name === aStudent.name &&
           element.studentNumber === aStudent.studentNumber &&
           element.yearOfStudy === aStudent.yearOfStudy
  })

  if (index === -1) {
    return studentArray
  }

  studentArray.splice(index)
  return studentArray
}

const modifiedArray = deleteStudent({
  name: 'Kiren',
  studentNumber: 567893,
  yearOfStudy: 4
}, students)

const newModifiedArray = deleteStudent({
  name: 'Kaamilah',
  studentNumber: 123456,
  yearOfStudy: 4
}, students)

console.log(modifiedArray)
console.log(newModifiedArray)
