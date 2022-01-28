const createForm = () => {
    const contactForm = document.createElement('div');
    contactForm.classList.add('contactForm');

    const phoneNumber = document.createElement('h2');
    phoneNumber.innerHTML = '123-321-4432'
    contactForm.appendChild(phoneNumber);

    return contactForm;
}

const createContactPage = () => {
    // Creating contact section
    const contact = document.createElement('section');
    contact.classList.add('contactSection');

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');
    contact.appendChild(contactContainer);

    const form = createForm()
    contactContainer.appendChild(form);

    const mapDiv = document.createElement('div');
    mapDiv.classList.add('mapDiv');
    contactContainer.appendChild(mapDiv);


    const map = document.createElement('p');
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91476950538!2d-74.11976291530915!3d40.6974034425091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1643357519865!5m2!1sen!2sus" width="450" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    mapDiv.appendChild(map);





    return contact;
}




function loadContact() {
    const content = document.getElementById('sectionContent');
    content.innerHTML = '';

    const contactContent = createContactPage();
    content.appendChild(contactContent);

};
export default loadContact;