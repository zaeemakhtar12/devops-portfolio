// Theme Switcher Logic (Light & Dark Mode)
const themeToggleBtn = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");
const htmlElement = document.documentElement;

// 1. Determine Initial Theme (Default to Light, or restore previous saved choice)
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
  setTheme(savedTheme);
} else {
  // Default to light theme as requested
  setTheme("light");
}

// 2. Toggle Theme on Button Click
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  });
}

function setTheme(theme) {
  htmlElement.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);
  if (themeLabel) {
    themeLabel.textContent = theme === "light" ? "Light" : "Dark";
  }
}
