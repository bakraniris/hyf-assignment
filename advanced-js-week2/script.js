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

