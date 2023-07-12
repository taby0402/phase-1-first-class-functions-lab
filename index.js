// const returnFirstTwoDrivers() 
function returnFirstTwoDrivers(drivers){
  let arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
  return drivers.slice(0,2);
}
//deliverable 2
function returnLastTwoDrivers(drivers){
    let arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(-2);
}
//deliverable 3
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
//deliverable 4
const createFareMultiplier = (multiplyValue) => {
    return function (value) {
        return multiplyValue*value;
    }
    }
    //deliverable 4 
    //fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke
const fareDoubler = createFareMultiplier(2);
//deliverable 5/6 
//fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke
const fareTripler = createFareMultiplier (3);
//deliverable 6 
//createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.

//deliverable 7
const selectDifferentDrivers = (drivers, driversToReturn) => {
    return driversToReturn(drivers)
}


// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// //['Antonia', 'Nuru', 'Amari', 'Mo']const uppercaseNames = names.map((name) => name.toLocaleUpperCase())

// console.log(uppercaseNames)
// //drivers.map((driversers) => drivers.returnLastTwoDrivers())
// console.log(returnLastTwoDrivers)

// describe('selectingDrivers', function () {
//     it('has the `returnFirstTwoDrivers` function to as its first element', function () {
//       expect(selectingDrivers[0]).to.eql(returnFirstTwoDrivers);
//     });

//     it('has the `returnLastTwoDrivers` function to as its last element', function () {
//       expect(selectingDrivers[1]).to.eql(returnLastTwoDrivers);
//     });
//const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// const firstTwoDrivers = selectingDrivers[0](['John', 'Jane', 'Mike', 'Sara'].slice());
// console.log('First two drivers:', firstTwoDrivers);