function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Light theme profile picture");
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png");
    img.setAttribute("alt", "Dark themee profile picture");
  }
}
