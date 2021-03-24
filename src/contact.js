function contact () {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const address = document.createElement("h3");
  address.innerHTML = "3, Rue Marcadieu, Avenue John Brown <br> Port-au-Prince, Haiti";

  const email = document.createElement("h3");
  eamil.innerHTML = "ocomptoirmarcadieu@gmail.com";

  const phone = document.createElement("h3");
  phone.innerHTML = "+509 37 63 8903";

  const geoLocation = document.createElement("img");
  geoLocation.src = "img/geolocation.png";
  geoLocation.alt = "Ô Comptoir de Marcadieu";

  contact.appendChild(address);
  contact.appendChild(email);
  contact.appendChild(phone);
  contact.appendChild(geoLocation);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.innerHTML = "";
  main.appendChild(contact());
}

export default loadContact;