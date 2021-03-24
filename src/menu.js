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

  const headerBreak = document.createElement("h2");
  headerBreak.innerHTML = "Breakfast";

  const foodImageBreak = document.createElement("img");
  foodImageBreak.src = "img/breakfast.jpg";
  foodImageBreak.alt = "Trio Burger";

  const foodBreak = document.createElement("h4");
  foodBreak.innerHTML = "Scramble egg, Baggles, Bacon <br> Noodles, Sandwiches, Burger";

  const beverageBreak = document.createElement("h4");
  beverageBreak.innerHTML = "Soda, Milk, Juice";

  breakfast.appendChild(headerBreak);
  breakfast.appendChild(foodImageBreak);
  breakfast.appendChild(foodBreak);
  breakfast.appendChild(beverageBreak);

  return breakfast;
}

function lunch() {
  const lunch = document.createElement("div");
  lunch.classList.add("menu-item");

  const headerLunch = document.createElement("h2");
  headerLunch.innerHTML = "Lunch";

  const foodImageLunch = document.createElement("img");
  foodImageLunch.src = "img/lunch.jpg";
  foodImageLunch.alt = "meals";

  const foodLunch = document.createElement("h4");
  foodLunch.innerHTML = "Chicken Wings, Nuggets, Grill <br> Fries, Salads, Steak";

  const beverageLunch = document.createElement("h4");
  beverageLunch.innerHTML = "Smoothie, soda, Juice";

  lunch.appendChild(headerLunch);
  lunch.appendChild(foodImageLunch);
  lunch.appendChild(foodLunch);
  lunch.appendChild(beverageLunch);

  return lunch;
}

function dinner() {
  const dinner = document.createElement("div");
  dinner.classList.add("menu-item");

  const headerDinner = document.createElement("h2");
  headerDinner.innerHTML = "Dinner";

  const foodImageDinner = document.createElement("img");
  foodImageDinner.src = "img/dinner.jpg";
  foodImageDinner.alt = "dinner";

  const foodDinner = document.createElement("h4");
  foodDinner.innerHTML = "Salad, Meat, Fishes <br> Rice and Beans, BBQ, Steak";

  const beverageDinner = document.createElement("h4");
  beverageDinner.innerHTML = "Red Wine, Rose, <br> Martini, Cocktail";

  dinner.appendChild(headerDinner);
  dinner.appendChild(foodImageDinner);
  dinner.appendChild(foodDinner);
  dinner.appendChild(beverageDinner);

  return dinner;
}

function bar() {
  const bar = document.createElement("div");
  bar.classList.add("menu-item");

  const headerBar = document.createElement("h2");
  headerBar.innerHTML = "Bar";

  const barImage = document.createElement("img");
  barImage.src = "img/bar.jpg";
  barImage.alt = "cocktail";

  const barDrink = document.createElement("h4");
  barDrink.innerHTML = "Ice tea, Cranberry Juice, Coffee <br> Latte, Chocolate, Mix";

  const barAlchool = document.createElement("h4");
  barAlchool.innerHTML = "Cocktail, Martini, Rhum <br> Vodka, Mojito, House Special";

  bar.appendChild(headerBar);
  bar.appendChild(barImage);
  bar.appendChild(barDrink);
  bar.appendChild(barAlchool);
  
  return bar;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(menu());
}

export default loadMenu;