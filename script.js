function toggleMode() {
  const html = document.documentElement;
  const root = document.querySelector(":root");

  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Light theme profile picture");
    root.style.setProperty("--bg-color", "rgb(239, 235, 239)");
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png");
    img.setAttribute("alt", "Dark theme profile picture");
    root.style.setProperty("--bg-color", "rgb(22, 22, 24)");
  }
}
