// Code your solution in this file!

const returnFirstTwoDrivers = function (driversArray) {
  return driversArray.slice(0,2);
};

const returnLastTwoDrivers = function (driversArray) {
  return driversArray.slice(-2);
};

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//This will output a function. NO VALUE. That function will be used later on.

//literally just making a function here!!!!!!!
const createFareMultiplier = function (multiplier) {
  return function (price) {
    return price * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

//pass function in WITHOUT parens because PARENS cause js to invoke the function
//Also it's saved to a variable above (maybe?)
const selectDifferentDrivers = function ( driversArray, specifiedDriverFunction ) {
    return specifiedDriverFunction(driversArray);
    //return something
  };
