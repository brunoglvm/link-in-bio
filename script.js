document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  applyTheme(savedTheme || "dark");
});

function toggleMode() {
  const currentTheme = document.documentElement.classList.contains("light")
    ? "dark"
    : "light";
  applyTheme(currentTheme);
  localStorage.setItem("theme", currentTheme);
}

function applyTheme(theme) {
  const html = document.documentElement;
  const root = document.querySelector(":root");
  const img = document.querySelector("#user img");

  if (theme === "light") {
    html.classList.add("light");
    html.classList.remove("dark");
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Light theme user image");
    root.style.setProperty("--bg-color", "rgb(239, 235, 239)");
  } else {
    html.classList.add("dark");
    html.classList.remove("light");
    img.setAttribute("src", "./assets/avatar-dark.png");
    img.setAttribute("alt", "Dark theme user image");
    root.style.setProperty("--bg-color", "rgb(22, 22, 24)");
  }
}
