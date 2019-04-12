'use strict'

const map = function (functionToApply, array) {
  const newArray = []

  array.forEach(function (element) {
    newArray.push(functionToApply(element))
  })

  return newArray
}

const numbers = [0, 2, 3, 10, 15, 8, 1]
const numbers2 = [-6, 13, 5, 20, -1, 7]

const squareNumbers = function (number) {
  return number * number
}

const squareArray = map(squareNumbers, numbers)
const squareArray2 = map(squareNumbers, numbers2)
const sqArrayTest = numbers.map(x => x * x)
const sqArray2Test = numbers2.map(x => x * x)

console.log(numbers)
console.log(squareArray)
console.log(sqArrayTest)
console.log()

console.log(numbers2)
console.log(squareArray2)
console.log(sqArray2Test)
