const createContactPage = () => {
    // Creating contact section
    const contact = document.createElement('section');
    contact.classList.add('contactSection');

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');
    contact.appendChild(contactContainer);

    const header = document.createElement('h1');
    header.innerHTML = 'hi'
    contactContainer.appendChild(header);

    


    return contact;
}




function loadContact() {
    const content = document.getElementById('sectionContent');
    content.innerHTML = '';

    const contactContent = createContactPage();
    content.appendChild(contactContent);

};
export default loadContact;