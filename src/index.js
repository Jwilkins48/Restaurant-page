import  loadPage  from './loadPage';
import  loadContact  from './contact';
import  loadHome  from './home';
import  loadMenu  from './menu';

load();

const changePage = () => {
    const home = document.getElementById('homeBtn');
    const menu = document.getElementById('menuBtn');
    const contact = document.getElementById('contactBtn');

    const order = document.getElementById('homeHeartBtn');

    home.addEventListener('click', loadHome);
    menu.addEventListener('click', loadMenu);

    order.addEventListener('click', loadMenu);
}

function load() {
    loadPage();
    loadHome();
    changePage();
}

