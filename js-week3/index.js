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