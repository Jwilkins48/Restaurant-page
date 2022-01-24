const createImg = (src) => {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('imgContainer');

    const image = document.createElement("IMG");
    image.setAttribute("src", src);
    image.classList.add('image');
    imgContainer.appendChild(image);

    return imgContainer;
}
const createBtn = (id, context) => {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    btn.classList.add('homeBtn');
    btn.textContent = context;

    return btn;
};


const createHomePage = () => {
    const home = document.createElement('section');
    home.classList.add('homeSection');

    const homeHeading = document.createElement('h2'); //Give content to page
    homeHeading.classList.add('homeHeading');
    homeHeading.innerHTML = 'Treat yourself...'
    home.appendChild(homeHeading);

    const homeImg = createImg('imgs/cake.jpg');
    home.appendChild(homeImg);

    const homeBtn = createBtn('homeBtn', 'Order Now');
    home.appendChild(homeBtn);

    return home;
};

function loadHome() {
    const content = document.getElementById('sectionContent');

    const homeContent = createHomePage();
    content.appendChild(homeContent);
};

export default loadHome;