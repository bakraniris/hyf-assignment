// Javascript warmup - Item array removal

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

const nameToRemoveIndex = names.indexOf(nameToRemove);
if (nameToRemoveIndex !== -1) {
  names.splice(nameToRemoveIndex, 1);
}

console.log(names);

// Im going to try and add another solution that can eliminate "ahmad", not only "Ahmad"

// Javascript warmup - When will we be there??

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculatingTravelTime(travelInformation) {
  const hours = travelInformation.destinationDistance / travelInformation.speed;
  const totalMinutes = hours * 60;

  return {
    hours: Math.floor(hours),
    minutes: Math.round(totalMinutes % 60),
  };
}

const travelTime = calculatingTravelTime(travelInformation);

console.log(travelTime); // 8 hours and 38 minutes


// Javascript warmup - Series duration of my life

const seriesDurations = [
  {
    title: "Dragon Prince",
    days: 1,
    hours: 3,
    minutes: 18,
  },
  {
    title: "The Walking Dead",
    days: 5,
    hours: 21,
    minutes: 36,
  },
  {
    title: "The Office",
    days: 2,
    hours: 20,
    minutes: 12,
  },
];

// function logOutSeriesText() {
//   const lifeMinutes = 80 * 365 * 24 * 60;

//   const dragonPrinceDurationMinutes = (seriesDurations[0].days * 24 * 60) + (seriesDurations[0].hours * 60) + seriesDurations[0].minutes;
//   const dragonPrincePercentage = ((dragonPrinceDurationMinutes / lifeMinutes) * 100).toFixed(3);
//   const dragonPrinceNumber = (dragonPrinceDurationMinutes / lifeMinutes) * 100;

//   const theWalkingDeadDurationMinutes = (seriesDurations[1].days * 24 * 60) + (seriesDurations[1].hours * 60) + seriesDurations[1].minutes;
//   const theWalkingDeadNumber = (theWalkingDeadDurationMinutes / lifeMinutes) * 100;
//   const theWalkingDeadPercentage = ((theWalkingDeadDurationMinutes / lifeMinutes) * 100).toFixed(3);

//   const theOfficeDurationMinutes = (seriesDurations[2].days * 24 * 60) + (seriesDurations[2].hours * 60) + seriesDurations[2].minutes;
//   const theOfficeNumber = (theOfficeDurationMinutes / lifeMinutes) * 100;
//   const theOfficePercentage = ((theOfficeDurationMinutes / lifeMinutes) * 100).toFixed(3);;

//   const totalPercentage = (dragonPrinceNumber + theWalkingDeadNumber + theOfficeNumber).toFixed(3);

//     console.log("Dragon Prince took " + dragonPrincePercentage + "% of my life."),

//     console.log("The Walking Dead took " + theWalkingDeadPercentage + "% of my life.")

//     console.log("The Office took " + theOfficePercentage + "% of my life.")

//     console.log("In total that is " + totalPercentage + "% of my life.")
// }

//logOutSeriesText();


// I need a better solution for this