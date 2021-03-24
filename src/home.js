function home(){
  const home = document.createElement("div");
  home.classList.add("home");

  const dishImage = document.createElement("img");
  dishImage.src = "img/dish.jpg";
  dishImage.alt = "meal";

  home.appendChild(dishImage);
  home.appendChild(motto());
  return home;
}

function motto() {
  const motto = document.createElement("h2")
  motto.innerHTML = "<h2>More than food</h2> <br> <h3>We are a family</h3>";
}

function loadHome() {
  const main = document.getElementById("main");
  main.innerHTML = "";
  main.appendChild(home());
}

export default loadHome;

