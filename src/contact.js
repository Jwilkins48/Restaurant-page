const placeIcon = (id, src, context) => {
    const formDiv = document.createElement('div');
    formDiv.classList.add(id);

    const icon = document.createElement('img');
    icon.setAttribute('id', id);
    icon.setAttribute('src', src);
    formDiv.appendChild(icon);

    const formContext = document.createElement('p');
    formContext.classList.add('formContext');
    formContext.innerHTML = context;
    formDiv.appendChild(formContext);

    return formDiv;
};

const createHours = (className, content) => {
    const hours = document.createElement('li');
    hours.classList.add(className);
    hours.innerHTML = content;

    return hours;
}

const createForm = () => {
    const contactForm = document.createElement('div');
    contactForm.classList.add('contactForm');

    //Phone number
    const phoneNumber = placeIcon('phone', 'imgs/phone.png', '123-321-4556');
    contactForm.appendChild(phoneNumber);

    //address
    const address = placeIcon('address', 'imgs/home.png', '389 Amsterdam Ave');
    contactForm.appendChild(address);
    //hours
    const hoursInfoDiv = document.createElement('div');
    hoursInfoDiv.classList.add('hoursInfoDiv');
    contactForm.appendChild(hoursInfoDiv);
    //Hours title
    const hoursInfo = document.createElement('h1');
    hoursInfo.classList.add('hoursInfo');
    hoursInfo.innerHTML = 'Hours';
    hoursInfoDiv.appendChild(hoursInfo);
    //Hours content

    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('hoursDiv');
    hoursInfoDiv.appendChild(hoursDiv);

    const hours = createHours('hours', 'Mon: 7:00am - 7:00pm');
    hoursInfoDiv.appendChild(hours);
    hoursDiv.appendChild(hours);
    const hours2 = createHours('hours', 'Tues: 7:00am - 7:00pm');
    hoursInfoDiv.appendChild(hours2);
    hoursDiv.appendChild(hours2);
    const hours3 = createHours('hours', 'Wed: 9:00am - 6:00pm');
    hoursInfoDiv.appendChild(hours3);
    hoursDiv.appendChild(hours3);
    const hours4 = createHours('hours', 'Thurs: 7:00am - 6:00pm');
    hoursInfoDiv.appendChild(hours4);
    hoursDiv.appendChild(hours4);
    const hours5 = createHours('hours', 'Fri: 9:00am - 10:00pm');
    hoursInfoDiv.appendChild(hours5);
    hoursDiv.appendChild(hours5);


    return contactForm;
}

const createContactPage = () => {
    // Creating contact section
    const contact = document.createElement('section');
    contact.classList.add('contactSection');
    // Contact container
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');
    contact.appendChild(contactContainer);

    const form = createForm()
    contactContainer.appendChild(form);

    // Creating Map 
    const mapDiv = document.createElement('div');
    mapDiv.classList.add('mapDiv');
    contactContainer.appendChild(mapDiv);

    const map = document.createElement('p');
    map.classList.add('map');
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91476950538!2d-74.11976291530915!3d40.6974034425091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1643357519865!5m2!1sen!2sus" width="450" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    mapDiv.appendChild(map);

    const attrib = document.createElement('p');
    attrib.classList.add('attrib');
    attrib.innerHTML = '<a  class="attribs" href="https://www.flaticon.com/free-icons/dessert" title="dessert icons">Dessert icons by Freepik-Flaticon</a><a class="attribs" href="https://www.flaticon.com/free-icons/dessert" title="dessert icons">Dessert icons by Vitaly-Flaticon</a>' +
        '<a class="attribs" href="https://www.flaticon.com/free-icons/cake" title="cake icons">Cake icons by Freepik Flaticon</a><a class="attribs" href="https://www.flaticon.com/free-icons/cupcake" title="cupcake icons">Cupcake icons by Freepik-Flaticon</a>' +
        '<a class="attribs" href="https://www.flaticon.com/free-icons/phone" title="phone icons">Phone icons by Freepik-Flaticon</a><a class="attribs" href="https://www.flaticon.com/free-icons/home" title="home icons">Home icons by Freepik -Flaticon</a>';
    mapDiv.appendChild(attrib);





    return contact;
}




function loadContact() {
    const content = document.getElementById('sectionContent');
    content.innerHTML = '';

    const contactContent = createContactPage();
    content.appendChild(contactContent);

};
export default loadContact;