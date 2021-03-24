function menu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(breakfast());
  menu.appendChild(lunch());
  menu.appendChild(dinner());
  menu.appendChild(bar());
  
  return menu;
}

function breakfast() {
  const breakfast = document.createElement("div");
  breakfast.classList.add("menu-item");

  const food = document.createElement("h4");
  food.innerHTML = "Scramble egg, Baggles, Bacon <br> Noodles, Sandwiches, Burger";

  const beverage = document.createElement("h4");
  beverage.innerHTML = "Soda, Milk, Juice";

  const foodImage = document.createElement("img");
  foodImage.src = "img/breakfast.jpg";
  foodImage.alt = "Trio Burger";

  return breakfast;
}