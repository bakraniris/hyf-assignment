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

