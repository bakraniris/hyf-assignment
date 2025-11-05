// Age calculator
let yearOfBirth = 1998;
let yearFuture = 2030;

let age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in the year " + yearFuture + ".");  

// Dog age calculator
let dogYearOfBirth = 2015;
let dogYearFuture = 2030;
let dogYear = (dogYearFuture - dogYearOfBirth)*7;

let shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears === true) {
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture + ".");
}   else {
    console.log("Your dog will be " + (dogYearFuture - dogYearOfBirth) + " human years old in " + dogYearFuture + ".");
}

// House price estimator 
let houseWidth = 8;
let houseDepth = 10;
let houseHeight = 10;
let gardenSize = 100;
let volumeInMeters = houseWidth * houseDepth * houseHeight; 
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSize * 300;

console.log("The house price should be: " + housePrice + " DKK.");

let peterHousePrice = 2500000;

if (peterHousePrice > housePrice) {
    console.log("Peter is paying too much, because the house price should be: " + housePrice + " DKK.");
}   else if (peterHousePrice < housePrice) {
    console.log("Peter is paying too little, because the house price should be: " + housePrice + " DKK.");
}   else {
    console.log("Peter is paying the correct price.");
}

