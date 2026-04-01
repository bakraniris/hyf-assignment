const input = document.getElementById("urlInput");
const button = document.getElementById("generateBtn");
const image = document.getElementById("screenshot");

button.addEventListener("click", function () {
  const url = input.value;

  fetch(
    "https://website-screenshot6.p.rapidapi.com/screenshot?url=" +
      encodeURIComponent(url) +
      "&width=1280&height=720",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "6192c22112msh5e9e11e8ba0c38dp18290ajsn09fb8d332b8c",
        "x-rapidapi-host": "website-screenshot6.p.rapidapi.com",
      },
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("API RESPONSE:", data);

      if (data.screenshotUrl) {
        image.src = data.screenshotUrl;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});