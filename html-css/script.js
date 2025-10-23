const img = document.querySelector("figure > img");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.99,
  }
);

observer.observe(img);

// I must be honest ChatGPT helped me with this code but I wanted to experiment a bit
