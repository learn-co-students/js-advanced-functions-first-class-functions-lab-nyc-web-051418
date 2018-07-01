const returnFirstTwoDrivers = function(drivers) {
  newDriver = drivers
  return newDriver.slice (0, 2)
}

const returnLastTwoDrivers = function(drivers) {
  newDriver = drivers
  return newDriver.slice (drivers.length - 2, drivers.length)
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

function createFareMultiplier(multiplier) {
  return function(fare) {return fare * multiplier}
}

const fareDoubler = function (fare) {
  return createFareMultiplier (fare)(2)
}

const fareTripler = function (fare) {
  return createFareMultiplier (fare)(3)
}

function selectDifferentDrivers(drivers, driverFunction) {
  return driverFunction(drivers)
}
