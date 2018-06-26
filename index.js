// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => {
  return [drivers[0],drivers[1]]
  // debugger
}

const returnLastTwoDrivers = (drivers) => {
  x = drivers.length
  // debugger
  return [drivers[x-2],drivers[x-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// debugger

const createFareMultiplier = function (multiplier) {
  return function (value) {
    return multiplier * value;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, chosenDrivers) {
  return chosenDrivers(drivers);
};




