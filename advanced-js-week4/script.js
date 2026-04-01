const input = document.getElementById("urlInput");
const button = document.getElementById("generateBtn");
const image = document.getElementById("screenshot");

class AppError extends Error {
  constructor(message, userMessage) {
    super(message);
    this.userMessage = userMessage;
  }

  toUserMessage() {
    return this.userMessage;
  }
}

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
    .catch(err => {
    const error = new AppError(err.message, "Error. Try again!");
    alert(error.toUserMessage());
});
});

const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", async function () {
  try {
    const url = input.value;
    const screenshot = image.src;

    if (!url) {
      throw new AppError("Missing URL", "Please enter a URL first.");
    }

    if (!screenshot) {
      throw new AppError("Missing screenshot", "Generate a screenshot first.");
    }

    const res = await fetch("https://crudcrud.com/api/b1e55b146b7648719acabac5eda7efcd/screenshots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url: url,
        screenshotUrl: screenshot
      })
    });

    const data = await res.json();
    console.log("Saved:", data);
    alert("Screenshot saved!");

  } catch (err) {
    if (err instanceof AppError) {
      alert(err.toUserMessage());
    } else {
      alert("Something went wrong.");
    }
  }
});

const gallery = document.getElementById("gallery");

class Screenshot {
  constructor(url, screenshotUrl, id) {
    this.url = url;
    this.screenshotUrl = screenshotUrl;
    this.id = id;
  }

  render() {
    const div = document.createElement("div");

    div.innerHTML = `
      <img src="${this.screenshotUrl}" width="300" />
      <p>${this.url}</p>
      <button data-id="${this.id}" class="deleteBtn">Delete</button>
    `;

    return div;
  }
}

function loadScreenshots() {
  fetch("https://crudcrud.com/api/b1e55b146b7648719acabac5eda7efcd/screenshots")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log("All screenshots:", data);

      gallery.innerHTML = "";

      data.forEach(function (item) {
        const screenshot = new Screenshot(
          item.url,
          item.screenshotUrl,
          item._id
        );

        gallery.appendChild(screenshot.render());
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}
loadScreenshots();

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteBtn")) {
    const id = e.target.getAttribute("data-id");

    fetch(`https://crudcrud.com/api/b1e55b146b7648719acabac5eda7efcd/screenshots/${id}`, {
      method: "DELETE"
    })
      .then(function () {
        loadScreenshots();
      })
      .catch(function (err) {
        console.log(err);
      });
  }
});