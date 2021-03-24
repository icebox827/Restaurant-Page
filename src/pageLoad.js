function header() {
  const header = document.createElement("header");
  header.classList.add("header");

  const name = document.createElement("h1");
  name.classList.add("name");
  name.innnerHTML = "<b>Ô Comptoir</b>";

  header.appendChild("name");
  header.appendChild("navbar");

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

