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
// Peter's house
let houseWidthPeter = 8;
let houseDepthPeter = 10;
let houseHeightPeter = 10;
let gardenSizePeter = 100;
let volumeInMetersPeter = houseWidthPeter * houseDepthPeter * houseHeightPeter; 
let housePrice1 = volumeInMetersPeter * 2.5 * 1000 + gardenSizePeter * 300;

console.log("The house price should be: " + housePrice1 + " DKK.");

let peterHousePrice = 2500000;

if (peterHousePrice > housePrice1) {
    console.log("Peter is paying too much, because the house price should be " + housePrice1 + " DKK.");
}   else if (peterHousePrice < housePrice1) {
    console.log("Peter is paying too little, because the house price should be " + housePrice1 + " DKK.");
}   else {
    console.log("Peter is paying the correct price.");
}
// Julia's house
let houseWidthJulia = 5;
let houseDepthJulia = 11;
let houseHeightJulia = 8;
let gardenSizeJulia = 70;
let volumeInMetersJulia = houseWidthJulia * houseDepthJulia * houseHeightJulia; 
let housePrice2 = volumeInMetersJulia * 2.5 * 1000 + gardenSizeJulia * 300;

console.log("The house price should be: " + housePrice2 + " DKK.");

let juliaHousePrice = 1000000;
if (juliaHousePrice > housePrice2) {
    console.log("Julia is paying too much, because the house price should be " + housePrice2 + " DKK.");
}   else if (juliaHousePrice < housePrice2) {
    console.log("Julia is paying too little, because the house price should be " + housePrice2 + " DKK.");
}   else {
    console.log("Julia is paying the correct price.");
}