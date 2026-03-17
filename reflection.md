Improvements 
Here are 4 specific improvements I want to implement:

1️⃣ Replace inline style manipulation in JavaScript with classList.toggle()
→ Instead of using document.body.style.backgroundColor, I will use a body.dark class in CSS to improve scalability and maintain cleaner separation of concerns.

2️⃣ Improve button accessibility
→ Add type="button" and an aria-label attribute to make the button more accessible and semantically correct.

3️⃣ Fix contrast issues in dark mode
→ Adjust text color and the .about-me background when the .dark class is active to ensure proper readability.

4️⃣ Split the long text inside .about-me into multiple <p> elements
→ This improves HTML structure, readability, and semantic correctness.

These changes will make the code more professional, scalable, and accessible.



About Iris Portfolio
│
├── index.html
│   │
│   ├── <head>
│   │   ├── meta (charset, viewport)
│   │   ├── title
│   │   └── link → style.css
│   │
│   └── <body>
│       │
│       ├── <header>
│       │   └── h1.header
│       │
│       ├── <main>
│       │   │
│       │   ├── <section.about-me>
│       │   │   ├── <p> Introduction
│       │   │   ├── <p> Development journey
│       │   │   ├── <p> HR & skills
│       │   │   └── <p> Personal interests
│       │   │
│       │   ├── <ul.skills>
│       │   │   ├── <li> Software Development
│       │   │   ├── <li> Psychology & HR Expertise
│       │   │   └── <li> Board Game Enthusiast
│       │   │
│       │   └── <button.color-button>
│       │       └── Toggles Dark Mode
│       │
│       └── <footer>
│           └── Copyright
│
├── style.css
│   │
│   ├── :root (CSS variables)
│   ├── Base styles (body, layout, typography)
│   ├── Components
│   │   ├── header
│   │   ├── about-me card
│   │   ├── skills badges
│   │   └── button
│   ├── Dark mode styles (body.dark)
│   └── Responsive styles (@media)
│
└── script.js
    │
    ├── Select button
    ├── Load saved theme (localStorage)
    ├── Toggle .dark class on click
    └── Persist theme preference



    Here are 3 key things I learned from the review and implementation process:

1️⃣ Separation of concerns makes code more scalable
Instead of manipulating styles directly in JavaScript, using classList.toggle() and handling styling in CSS keeps structure (HTML), presentation (CSS), and behavior (JS) clearly separated. This makes the code cleaner, easier to maintain, and more scalable as the project grows.

2️⃣ Accessibility is not optional in professional frontend development
Adding attributes like type="button" and aria-label improves usability for assistive technologies and prevents unintended behavior. Small semantic improvements significantly increase the professionalism of a project.

3️⃣ UX details like contrast and persistence matter
Fixing color contrast in dark mode and saving theme preference with localStorage showed me that good frontend development goes beyond “making it work.” It’s about user experience, readability, and remembering user preferences to create a more polished and thoughtful product.

These changes helped me think more like a developer building for real users, not just writing functional code.