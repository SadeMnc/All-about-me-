const aboutIcon = document.getElementById("aboutIcon");
const aboutText = document.getElementById("aboutText");
const contactIcon = document.getElementById("contactIcon");
const contactText = document.getElementById("contactText");

// hide both by default
aboutText.style.display = "none";
contactText.style.display = "none";

aboutIcon.addEventListener("click", () => {
  const isVisible = getComputedStyle(aboutText).display === "block";

  // hide both first
  aboutText.style.display = "none";
  contactText.style.display = "none";

  // show only if it wasn't already visible
  if (!isVisible) {
    aboutText.style.display = "block";
  }
});

contactIcon.addEventListener("click", () => {
  const isVisible = getComputedStyle(contactText).display === "block";

  // hide both first
  aboutText.style.display = "none";
  contactText.style.display = "none";

  // show only if it wasn't already visible
  if (!isVisible) {
    contactText.style.display = "block";
  }
});


