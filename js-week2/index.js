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