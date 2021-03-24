function home(){
  const home = document.createElement("div");
  home.classList.add("home");

  home.appendChild(motto());

  return home;
}

function motto() {
  const motto = document.createElement("h2")
  motto.innerHTML = "More than food <br> We are a family";

  return motto;
}

function loadHome() {
  const main = document.getElementById("main");
  main.innerHTML = "";
  main.appendChild(home());

  return main
}

export default loadHome;

