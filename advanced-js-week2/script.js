// Functions

setTimeout(() => {
  document.getElementById("text1").innerText = "This is the text displayed after 2.5 seconds";
}, 2500);

function logAfterDelay(delay, stringToLog) {
  setTimeout(() => {
    document.getElementById("text2").innerText = stringToLog;
  }, delay * 1000);
}

logAfterDelay(3, "Logged after 3 seconds");
logAfterDelay(5, "Logged after 5 seconds");
logAfterDelay(10, "Logged after 10 seconds");

