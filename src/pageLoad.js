import loadHome from "./home";

function header() {
  const header = document.createElement("header");
  header.classList.add("header");

  const name = document.createElement("h1");
  name.classList.add("name");
  name.innerHTML = "<b>Ô Comptoir de Marcadieu</b>";

  header.appendChild(name);
  header.appendChild(navbar());

  return header;
}

function navbar() {
  const nav = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.classList.add("button-nav");
  homeButton.innerHTML = "Home";
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    loadHome();
  });

  const menuButton = document.createElement("button");
  menuButton.classList.add("button-nav");
  menuButton.innerHTML = "Menu";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuButton);
    loadMenu();
  });

  const contactButton = document.createElement("button");
  contactButton.classList.add("button-nav");
  contactButton.innerHTML = "Contact";
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactButton);
    loadContact();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function activeButton(button) {
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function main() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function footer() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.innerHTML = "Copyright © 2021 Denis Lafontant";

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/icebox827";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fab");
  githubIcon.classList.add("fa-github");

  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
}

function loadPage() {
  const content = document.getElementById("content");

  content.appendChild(header());
  content.appendChild(main());
  content.appendChild(footer());

  activeButton(document.querySelector(".button-nav"));
  loadHome();
}

export default loadPage;


