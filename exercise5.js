'use strict'

let course = {
  courseCode: 'ELEN4010'
}

let anotherCourse = {
  courseCode: 'ELEN3009'
}

let oneMoreCourse = {
  courseCode: 'ELEN2007'
}

let finalCourseIPromise = {
  courseCode: 'ELEN1000'
}

const addYearOffered = function (theCourse) {
  const yearIndicator = theCourse.courseCode.substring(4, 6)

  if (yearIndicator.includes('40')) {
    theCourse.yearOffered = 4
  } else if (yearIndicator.includes('30')) {
    theCourse.yearOffered = 3
  } else if (yearIndicator.includes('20')) {
    theCourse.yearOffered = 2
  } else if (yearIndicator.includes('10')) {
    theCourse.yearOffered = 1
  } else {
    theCourse.yearOffered = 'Non-traditional course - year not specified'
  }
}

addYearOffered(course)
addYearOffered(anotherCourse)
addYearOffered(oneMoreCourse)
addYearOffered(finalCourseIPromise)

const provideCourseInfo = function (theCourse) {
  const info = `${theCourse.courseCode} is offered in year ${theCourse.yearOffered}.`
  return info
}

const courseInfo = provideCourseInfo(course)
const anotherCourseInfo = provideCourseInfo(anotherCourse)
const oneMoreCourseInfo = provideCourseInfo(oneMoreCourse)
const finalCourseInfo = provideCourseInfo(finalCourseIPromise)

console.log(courseInfo)
console.log(anotherCourseInfo)
console.log(oneMoreCourseInfo)
console.log(finalCourseInfo)
