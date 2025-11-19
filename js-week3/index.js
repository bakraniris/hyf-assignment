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
//   const theOfficePercentage = ((theOfficeDurationMinutes / lifeMinutes) * 100).toFixed(3);

//   const totalPercentage = (dragonPrinceNumber + theWalkingDeadNumber + theOfficeNumber).toFixed(3);

//     console.log("Dragon Prince took " + dragonPrincePercentage + "% of my life."),

//     console.log("The Walking Dead took " + theWalkingDeadPercentage + "% of my life.")

//     console.log("The Office took " + theOfficePercentage + "% of my life.")

//     console.log("In total that is " + totalPercentage + "% of my life.")
// }

//logOutSeriesText();


// I need a better solution for this


function logOutSeriesText() {
  const lifeMinutes = 80 * 365 * 24 * 60;
  const seriesNumberForTotal = [];
  for (i = 0; i < seriesDurations.length; i++) {
      const seriesMinutes = (seriesDurations[i].days * 24 * 60) + (seriesDurations[i].hours * 60) + seriesDurations[i].minutes;
      const seriesPercentage = ((seriesMinutes / lifeMinutes) * 100);
      seriesNumberForTotal.push(seriesPercentage);

      console.log(seriesDurations[i].title + " took " + seriesPercentage.toFixed(3) + " % of my life.")
    }
    let totalPercentage = 0;
    for (i = 0; i < seriesNumberForTotal.length; i++){
        totalPercentage += seriesNumberForTotal[i];
    }
    console.log("In total that is " + totalPercentage.toFixed(3) + "% of my life.")
    
}

logOutSeriesText(); 

// I misunderstood the task, but I wanted to leave first version 



// Smart-ease - Back to the basics! - NOnoN0nOYes (Note taking app)

const notes = [];

function saveNote(content, id) {
  notes.push({
    content,
    id,
  });
}

saveNote("Buy milk", 1);
saveNote("Pick up a new plant", 2);
saveNote("Color your hair in neon pink color", 3);

console.log(notes);


//Smart-ease - Back to the basics! - CactusIO-interactive (Smart phone usage app) optional

const activities = [];

function addActivity(date, activity, duration) {
  activities.push({
    date,
    activity,
    duration,
  });
}
function today() {
  const today = new Date();

  return today.toLocaleDateString("en-US");
}

console.log(today());

addActivity(today(), "Coding", 30);
addActivity(today(), "TikTok", 90);
addActivity(today(), "Homework", 300);

console.log(activities);

function showStatus() {
  let sum = 0;

  for (let i = 0; i < activities.length; i++) {
    sum += activities[i].duration;
  }

  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
  } else if (activities.length === 1) {
    console.log(
      "You have added 1 activity. The amount of usage is " +
        activities[0].duration +
        " minutes."
    );
  } else if (sum > 400) {
    console.log("You have reached your limit, no more smartphoning for you!");
  } else {
    console.log(
      "You have added " +
        activities.length +
        " activities. They amount to " +
        sum +
        " min. of usage"
    );
  }
}

showStatus();

function mostTimeSpent() {
  const mostTimeSpent = Math.max(...activities.map((a) => a.duration));
  console.log(mostTimeSpent);
  const mostTimeSpentActivity = activities.find(
    (a) => a.duration === mostTimeSpent
  );
  console.log(mostTimeSpentActivity);
}

mostTimeSpent();


// I did the tasks in the random folder because I had issues with git and I had a meeting with Karolina so I wanted to be prepared with questions about the assignment so I had to finish the assignment before our meeting, and on the meeting she helped me with the git issue so I had to copy paste all the tasks into this file after everything was working again. Anyway thats short explanation why I have commit after commit in a couple of minutes.