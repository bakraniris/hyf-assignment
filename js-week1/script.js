let yearOfBirth = 1998;
let yearFuture = 2030;

let age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in the year " + yearFuture + ".");  


let dogYearOfBirth = 2015;
let dogYearFuture = 2030;
let dogYear = (dogYearFuture - dogYearOfBirth)*7;

let shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears === true) {
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture + ".");
}   else {
    console.log("Your dog will be " + (dogYearFuture - dogYearOfBirth) + " human years old in " + dogYearFuture + ".");
}