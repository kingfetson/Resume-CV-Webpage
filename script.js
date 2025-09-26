// script.js
document.getElementById("downloadBtn").addEventListener("click", () => {
  // Temporarily hide the button before printing
  const btn = document.getElementById("downloadBtn");
  btn.style.display = "none";

  window.print();

  // Show it again after printing
  setTimeout(() => {
    btn.style.display = "inline-block";
  }, 1000);
});
// Download Resume as PDF
document.getElementById("downloadBtn").addEventListener("click", () => {
  const btn = document.getElementById("downloadBtn");
  btn.style.display = "none";
  window.print();
  setTimeout(() => {
    btn.style.display = "inline-block";
  }, 1000);
});

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "☀️ Light Mode";
}

// Handle toggle
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙 Dark Mode";
  }
});
