const createMenuItem = () => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('itemDiv');

    return itemDiv;
}

const placeIcon = (id, src) => {
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('iconDiv');

    const icon = document.createElement('img');
    icon.setAttribute('id', id);
    icon.setAttribute('src', src);
    iconDiv.appendChild(icon);

    return iconDiv;
};

const CreateItemContent = (title, context) => {
    const itemContent = document.createElement('div');
    itemContent.classList.add('itemContent');

    const itemTitle = document.createElement('h1');
    itemTitle.classList.add('menuTitleHeader');
    itemTitle.innerHTML = title;
    itemContent.appendChild(itemTitle);

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('itemDescription');
    itemDescription.innerHTML = context;
    itemContent.appendChild(itemDescription);

    return itemContent;
}

const createMenuPage = () => {
    // Creating menu section
    const menu = document.createElement('section');
    menu.classList.add('menuSection');
    // menu container
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    menu.appendChild(menuContainer);

    // Creating item containers
    // Menu item one
    const itemDiv = createMenuItem();
    const icon1 = placeIcon('icon1', 'imgs/cake.png');
    itemDiv.appendChild(icon1);
    menuContainer.appendChild(itemDiv);

    const item1 = CreateItemContent('Strawberry Cake', 'Made with sweet strawberries throughout and a rich, creamy strawberry frosting');
    itemDiv.appendChild(item1);
    
    // Menu item two
    const item2Div = createMenuItem();
    const icon2 = placeIcon('icon2', 'imgs/pudding.png');
    item2Div.appendChild(icon2);
    menuContainer.appendChild(item2Div);

    const item2 = CreateItemContent('Chocolate Pudding', 'Chocolate cake layered with chocolate pudding. Topped with whipped cream and fresh blueberries');
    item2Div.appendChild(item2);

    // Menu item three
    const item3Div = createMenuItem();
    const icon3 = placeIcon('icon3', 'imgs/chocCake.png');
    item3Div.appendChild(icon3);
    menuContainer.appendChild(item3Div);

    const item3 = CreateItemContent('The Queen Elizabeth', 'Layers of rich, moist yellow cake, each topped with decadent chocolate icing');
    item3Div.appendChild(item3);

    // Menu item four
    const item4Div = createMenuItem();
    const icon4 = placeIcon('icon4', 'imgs/cupcake.png');
    item4Div.appendChild(icon4);
    menuContainer.appendChild(item4Div);

    const item4 = CreateItemContent("Red Velvet", 'Delicious red velvet cupcakes with our signature cream cheese frosting');
    item4Div.appendChild(item4);

    // Menu item five
    const item5Div = createMenuItem();
    const icon5 = placeIcon('icon5', 'imgs/gelato.png');
    item5Div.appendChild(icon5);
    menuContainer.appendChild(item5Div);

    const item5 = CreateItemContent("Gelato", 'Deliciously smooth Gelato that comes in 6 different flavors');
    item5Div.appendChild(item5);

    // Menu item six
    const item6Div = createMenuItem();
    const icon6 = placeIcon('icon6', 'imgs/heartCake.png');
    item6Div.appendChild(icon6);
    menuContainer.appendChild(item6Div);

    const item6 = CreateItemContent("Hailey's Heart Cake", 'Delicate layers of golden butter cake, filled with vanilla cream cheese and fresh strawberries');
    item6Div.appendChild(item6);

    return menu;
}


function loadMenu() {
    const content = document.getElementById('sectionContent');
    content.innerHTML = '';

    const menuContent = createMenuPage();
    content.appendChild(menuContent);
};
export default loadMenu;