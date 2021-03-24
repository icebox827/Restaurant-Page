const Nav = (() => {
  const navBar = () => {
    const content = document.getElementById('content');
    const nav = document.createElementById('nav');
    const home = document.createElementById('button');
    const menu = document.createElementById('button');
    const contact = document.createElementById('button');

    nav.className = 'Nav';
    home.className = 'home';
    contact.className = 'contact';

    nav.setAttributes('id', 'navbar');

    document.getElementById('content').appendChild(nav);
    document.getElementById('navbar').appendChild(home);
    document.getElementById('navbar').appendChild(menu);
    document.getElementById('navbar').appendChild(contact);
  };
  return {navBar};
})();