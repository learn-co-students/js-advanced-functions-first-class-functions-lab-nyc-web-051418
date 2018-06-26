// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return firstTwoDrivers = drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
  return lastTwoDrivers = drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(intArg){
  return function(fare){
    return (intArg * fare);
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, driverFn){
  return driverFn(drivers);
}
