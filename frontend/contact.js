const container = document.querySelector(".wrapper");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


window.onload = function(evt) {
    /*
        PHASE 4: lets to a axios get request...
        you can follow the getting started guide on the axios docs site to help figure out what top put here...
        to get you started the url endpoint will be "http://localhost:8080/contacts/" + id

        and you will want to pass the res.data on to the populateContact() function instead of the staticContent...
    */
    const staticContact = {
        id: 1,
        name: "Tom Tarpey",
        email: "tom@tom.com",
        address: "321 Hurlingham Road. Birmingham. West Midlands. B44 0PL.",
        avatar: "tom.png",
        phone_numbers: [
            "01214546678",
            "07986545678"
        ]
    }

    populateContact(staticContact);
  }

function populateContact(contact) {
    const contactDiv = document.createElement("div");
    const phoneDiv = document.createElement("div");
    const img = document.createElement("img");
    const nameH2 = document.createElement("h2");
    const phoneH2 = document.createElement("h2");
    const phoneText = document.createTextNode("Phone Numbers");
    const linkText = document.createTextNode("Back");
    const nameText = document.createTextNode(contact.name);
    const emailText = document.createTextNode(contact.email);
    const addressText = document.createTextNode(contact.address);
    const emailP = document.createElement("p");
    const addressP = document.createElement("p");
    const ul = document.createElement("ul");
    const backLink = document.createElement("a");
    const phoneNums = [...contact.phone_numbers];

    /*
        PHASE 3: fill in some logic for the populate contact...
        HERE is the pseudocode for the logic...

        iterate over each phone number...
            create a new element "li"
            create a new "textNode" using the current iteration of the phone numbers
            append the child of "textNode" to the "li"
            append the child of "li" to the "ul"
        
        append the phoneText as a child of the phoneH2
        append the ul as a child of the phoneDiv

        append the emailText as a child of the emailP
        append the addressText as a child of the addressP
        append the nameText as a child of the nameH2
        append the linkText as a child of the backLink

        set the "src" attribute of the img to the contact.avatar
        set the "href" attribute of the backLink to "index.html"
        
        set the "class" attribute of the contactDiv to "item contact-card"
        set the "class" attribute of the img to "ui image"
        set the "class" attribute of the nameH2 to "header"
        set the "class" attribute of the emailP to "description"
        set the "class" attribute of the addressP to "description"


        append the img as a child of contactDiv
        append the nameH2 as a child of contactDiv
        append the addressP as a child of contactDiv
        append the emailP as a child of contactDiv
        append the phoneDiv as a child of contactDiv
        append the backLink as a child of contactDiv

        append the contactDiv as a child of container        
    */
}
