// Code your solution in this file!
// const returnFirstTwoDriver = drivers => drivers.slice(0, 2)

// console.log(returnFirstTwoDriver(drivers))

const returnFirstTwoDrivers = function(drivers) {
    let firstTwo = [];
    for (let i = 0; i < 2; i++) {
      firstTwo.push(drivers[i]);
    }
    return firstTwo;
  };

const returnLastTwoDrivers = function (drivers) {
    let lastTwo = [];
    for (let i = drivers.length -1; i >= drivers.length -2; i --) {
        lastTwo.unshift(drivers[i])
    }
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(multiplier) {
    return function(){
      let num = 5
      return num * multiplier
    }
}

const fareDoubler = function createFareMultiplier(num){
  return num * 2
}

const fareTripler = function createFareMultiplier(num){
  return num * 3
}

const selectDifferentDrivers = function(drivers, returnDrivers) {
  return returnDrivers(drivers)
}