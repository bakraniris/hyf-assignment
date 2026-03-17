// Functions

setTimeout(() => {
  document.getElementById("text1").innerText = "This is the text displayed after 2.5 seconds";
}, 2500);

function logAfterDelay(delay, stringToLog, elementId) {
  setTimeout(() => {
    document.getElementById(elementId).innerText = stringToLog;
  }, delay * 1000);
}

logAfterDelay(3, "Logged after 3 seconds", "text2");
logAfterDelay(5, "Logged after 5 seconds", "text2");
logAfterDelay(10, "Logged after 10 seconds", "text2");

document.getElementById("button").addEventListener("click", () => {
  logAfterDelay(5, "Called after 5 seconds", "text3");
});

function earthLogger() {
  document.getElementById("planets").innerText += "Earth\n";
}

function saturnLogger() {
  document.getElementById("planets").innerText += "Saturn\n";
}

function planetLogFunction(loggerFunction) {
  loggerFunction();
}

planetLogFunction(earthLogger)
planetLogFunction(saturnLogger)


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("locationButton").addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        document.getElementById("location").innerText = `Latitude: ${lat}, Longitude: ${lon}`

        const map = new google.maps.Map(document.getElementById("map"), {
          center: { lat, lng: lon },
          zoom: 15
        })

        new google.maps.Marker({
          position: { lat, lng: lon },
          map: map,
          title: "You are here"
        })

      }, error => {
        document.getElementById("location").innerText = "Unable to retrieve location"
      })
    } else {
      document.getElementById("location").innerText = "Geolocation is not supported by this browser"
    }
  })
})

function runAfterDelay(delay, callback) {
  setTimeout(callback, delay * 1000);
}

document.getElementById("runButton").addEventListener("click", () => {
  const delay = Number(document.getElementById("delayInput").value);
  runAfterDelay(delay, () => {
    document.getElementById("delayedOutput").innerText = `Callback ran after ${delay} seconds`;
  });
});

let lastClickTime = 0;

document.addEventListener("click", () => {
  const now = Date.now();
  if (now - lastClickTime <= 500) {
    document.getElementById("doubleClick").innerText = "You had a double click somewhere on the page!";
  }
  lastClickTime = now;
});

const funnyJokes = [
  "Why don’t programmers like nature? Too many bugs.",
  "Why do Java developers wear glasses? Because they don’t C#.",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
  "Why did the developer go broke? Because he used up all his cache."
];

const badJokes = [
  "I would tell you a joke about JavaScript... but it might not return.",
  "Why did the function break up? It had too many arguments.",
  "I tried to catch fog yesterday... Mist!",
  "Why don’t skeletons fight each other? They don’t have the guts."
];

function logFunnyJoke() {
  const randomIndex = Math.floor(Math.random() * funnyJokes.length);
  document.getElementById("joke").innerText = funnyJokes[randomIndex];
}

function logBadJoke() {
  const randomIndex = Math.floor(Math.random() * badJokes.length);
  document.getElementById("joke").innerText = badJokes[randomIndex];
}

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}
jokeCreator(true, logFunnyJoke, logBadJoke);
