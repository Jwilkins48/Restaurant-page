const createImg = (src) => {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('imgContainer');

    const image = document.createElement("IMG");
    image.setAttribute("src", src);
    image.classList.add('image');
    imgContainer.appendChild(image);

    return imgContainer;
}


const createBtn = (id) => {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    
    btn.classList.add('homeBtn');

    return btn;
};


const createHomePage = () => {
    const home = document.createElement('section');
    home.classList.add('homeSection');

    const homeHeading = document.createElement('h2'); 
    homeHeading.classList.add('homeHeading');
    homeHeading.innerHTML = 'Treat yourself...';
    home.appendChild(homeHeading);

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');

    const homeImg = createImg('imgs/redvel.jpg');
    home.appendChild(homeImg);

    home.appendChild(contentContainer);

    // Create home heart button
    const homeBtn = createBtn('homeHeartBtn');


    contentContainer.appendChild(homeBtn);
    const left = document.createElement('div');
    left.classList.add('left');
    homeBtn.appendChild(left);

    const right = document.createElement('div');
    right.classList.add('right');
    homeBtn.appendChild(right);

    const btnContent = document.createElement('div');
    btnContent.classList.add('btnContent');
    homeBtn.appendChild(btnContent);

    const spanContent = document.createElement('span');
    spanContent.innerHTML = 'Order Now'
    btnContent.appendChild(spanContent);


    return home;
};

function loadHome() {
    const content = document.getElementById('sectionContent');

    content.innerHTML = '';

    const homeContent = createHomePage();
    content.appendChild(homeContent);
};

export default loadHome;