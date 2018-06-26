// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiply) {
  return function(fare) {
    return multiply*fare;
  };
}

function fareDoubler(fare) {
  return fare*2;
}

function fareTripler(fare) {
  return fare*3;
}

const selectDifferentDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};
