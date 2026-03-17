//Exercise 1: Flight booking fullname function

function getFullName(firstName, surname) {
    console.log(firstName, surname)
}

const fullName1 = getFullName("Constantin", "Ugrina")


const fullName2 = getFullName("Irokai", "Kolekai")



// Exercise 2: Formal fullname

function getFullName2(useFormalName, firstName, surname) {
    if (useFormalName = true) {
    console.log("Lord " + firstName, surname)
    } else {
    console.log(firstName, surname)
    }
}

const fullName3 = getFullName2(true, "Constantin", "Ugrina")
const fullName4 = getFullName2(true)

// I was thinking about how to fix the problem with empty strings and I honestly have no idea how to deal with it, I also tried to get an explanation from ChatGPT but I didn't understand its answer. 

//But what if the person is a woman? Describe how you would fix the getFullName so it also works for women

/* I would add another check to ask for a gender
then I would add forth parameter 
and add an additional condition if it was a true then print "Lady"
*/



// Exercise 3: Event application


function getEventWeekday (daysToTheEvent) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const todayIndex = today.getDay();
    const eventIndex = (todayIndex + daysToTheEvent) % 7;
    return weekdays[eventIndex];
}

console.log(getEventWeekday(5));

// uh so many issues with this one, I would never be able to solve this without internet and ChatGPT help, I'm not sure if I would know how to solve this if one small thing change 
// task seems so simple but getting there was not simple 


// Exercise 4: Weather wear

function whatsTheWeather(temperature) {
    if (temperature <= 0) {
        console.log("Wear a warm coat with hat, scarf and gloves")
    } else if (temperature > 0 && temperature <= 7) {
        console.log("Wear a coat")
    } else if (temperature > 7 && temperature <= 15) {
        console.log("Wear a light coat");
    } else if (temperature > 15 && temperature <= 20) {
        console.log("Wear a long sleeve shirt, maybe hoodie, but have something underneath so you can take it off")
    } else if (temperature > 20 && temperature <= 30) {
        console.log("Wear a t-shirt with shorts")
    } else {
        console.log("Go to the beach its too hot")
    }
}

console.log(whatsTheWeather(100))

// Exercise 5: Student manager

const class07Students = [];
function addStudentToClass(studentName) {
    if (!studentName) {
        console.log("You need to write your name")
    } else if (class07Students.includes(studentName)){
        console.log("Student " + studentName + " is already in the class");
    } else if (studentName === "Queen of Denmark" || studentName === "Queen" || studentName === "The Queen Bee" || studentName === "Regina" || studentName === "Majesty") {
        class07Students.push(studentName);
    } else if (class07Students.length >= 6){
        console.log("Cannot add more students to class 07");
    } else {
        class07Students.push(studentName);
    } 
}

addStudentToClass("Iro Kai");
addStudentToClass("Kosta Kai Ugrina");
addStudentToClass("David Christmas");
addStudentToClass("Brad Pitt");
addStudentToClass("Angelina Jolie");
addStudentToClass("Pedro Pascal");
addStudentToClass("Jennifer Aniston");
addStudentToClass("Iro Kai");
addStudentToClass("The Queen Bee");

console.log(class07Students);

function getNumberOfStudents() {
  console.log(class07Students.length);
}

getNumberOfStudents();


// Exercise 5: Candy helper 

const candyTypeAndPricesPerGram = [
    ["sweet", 0.5],
    ["chocolate", 0.7],
    ["toffee", 1.1],
    ["chewing-gum", 0.03]
]
const boughtCandyPrices = [];

function addCandy(candyType, weight) {
    const candy = candyTypeAndPricesPerGram.find(c => c[0] === candyType);
    if (!candy) {
    console.log("Candy type not found");
    return;
  }
    const totalPrice = candy[1] * weight;
    boughtCandyPrices.push(totalPrice)
}
addCandy("sweet", 10);
addCandy("sweet", 20);
addCandy("bla", 10);

console.log(boughtCandyPrices);

const amountToSpend = Math.random() * 100;
console.log(amountToSpend);

let totalCandySpending = 0;
for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalCandySpending += boughtCandyPrices[i];
}

function canBuyMoreCandy(){

    if (totalCandySpending < amountToSpend) {
        console.log("You can buy more, so please do!")
    }
    else if (boughtCandyPrices > amountToSpend) {
        console.log("Enough candy for you!")
    }
}

canBuyMoreCandy();

// I'm not sure if I understood the task but this was fun to code 