import  loadPage  from './loadPage';
import  loadContact  from './contact';
import  loadHome  from './home';
import  loadMenu  from './menu';

load();

const changePage = () => {
    const home = document.getElementById('homeNavBtn');
    const menu = document.getElementById('menuBtn');
    const contact = document.getElementById('contactBtn');

    const order = document.getElementById('homeHeartBtn');
    order.addEventListener('click', loadMenu);

    home.addEventListener('click', loadHome);
    menu.addEventListener('click', loadMenu);
}

function load() {
    loadPage();
    loadHome();
    changePage();
}

