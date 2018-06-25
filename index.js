// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (num) {
  return function (num2) {
    return num * num2;
  }
}

const fareDoubler = function (num) {
  return createFareMultiplier(num)(2);
}

const fareTripler = function (num) {
  return createFareMultiplier(num)(3);
}

const selectDifferentDrivers = function(arrayOfDrivers, selectingDrivers) {
  return selectingDrivers(arrayOfDrivers);
}
