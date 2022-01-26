const createMenuPage = () => {
// Creating menu section
    const menu = document.createElement('section');
    menu.classList.add('menuSection');
// menu container
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    menu.appendChild(menuContainer);

    const menuHeader = document.createElement('h1');
    menuHeader.textContent = 'Hello';
    menuContainer.appendChild(menuHeader);

    return menu;
}


function loadMenu(){
    const content = document.getElementById('sectionContent');
    content.innerHTML = '';

    const menuContent = createMenuPage();
    content.appendChild(menuContent);
};
export default loadMenu;