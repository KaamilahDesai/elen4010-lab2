'use strict'

const fahrenheitToCelsius = function (x) {
  return ((x - 32) * (5 / 9))
}

const temp = fahrenheitToCelsius(32)
console.log(temp)

const anotherTemp = fahrenheitToCelsius
console.log(anotherTemp(100))

let oneMoreTemp = fahrenheitToCelsius
const zeroF = oneMoreTemp(0)
console.log(zeroF)
