const createHeader = () => {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const title = document.createElement('h1');
    title.setAttribute('id', 'headerTitle');
    title.textContent = 'Sugar High';

    header.appendChild(title);
    header.appendChild(createNav());
    return header;
}

const createBtn = (id, context) => {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    btn.classList.add('btn');
    btn.textContent = context;

    return btn;
};

const createNav = () => {
    const navBar = document.createElement('nav');
    navBar.setAttribute('id', 'navBar');


    const homeBtn = createBtn('homeNavBtn', 'Home');
    const menuBtn = createBtn('menuBtn', 'Menu');
    const contactBtn = createBtn('contactBtn', 'Contact Us');


    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);
    return navBar;
};

const createSection = (id) => {
    const mainContent = document.createElement('main');
    mainContent.setAttribute('id', id);
    return mainContent;
};

function loadPage() {
    const pageContent = document.getElementById('content');

    const heading = createHeader()
    pageContent.appendChild(heading);

    const sectionContent = createSection('sectionContent');
    sectionContent.innerHTML = '';
    sectionContent.setAttribute('id', 'sectionContent');
    pageContent.appendChild(sectionContent);
    
};

export default loadPage;