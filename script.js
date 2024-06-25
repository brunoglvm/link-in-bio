function toggleMode() {
  const html = document.documentElement;
  const root = document.querySelector(":root");
  const img = document.querySelector("#user img");

  html.classList.toggle("light");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Light theme user image");
    root.style.setProperty("--bg-color", "rgb(239, 235, 239)");
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png");
    img.setAttribute("alt", "Dark theme user image");
    root.style.setProperty("--bg-color", "rgb(22, 22, 24)");
  }
}
