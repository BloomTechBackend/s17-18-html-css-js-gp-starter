const contactForm = document.querySelector("#contact-form");
const contactList = document.querySelector("#contacts");

contactForm.onsubmit = async function(evt) {
  evt.preventDefault();
  const name = document.querySelector("#contactName").value;
  const email = document.querySelector("#contactEmail").value;
  const address = document.querySelector("#contactAddress").value;
  const avatar = document.querySelector("#contactAvatar").value;

  let pns = document.querySelector("#contactNumbers").value;
  pns = pns.split(",");
  for (let i = 0; i < pns.length; i++) {
    pns[i] = pns[i].trim();
  }

  console.log(pns);

  const newContact = {
    "name": name,
    "email": email,
    "address": address,
    "avatar": avatar,
    "phone_numbers": pns
  }
  /*
    PHASE 4: lets do a Axios POST request here passing the new contact to the endpoint of http://localhost:8080/contacts/"
    You will need to reload the page programattcally to show the new data on the page after posting it to the endpoint...
    HINT: a "window.location.reload()" will do that for you!
  */
}

window.onload = async function(evt) {
  evt.preventDefault();
  /*
    PHASE 4: Let's add an Axios GET request here to get the data to pass in to populateContactLists() function...
  */
  populateContactlists(staticData);

}

function populateContactlists(contactData) {

  for (let contact of contactData) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let text = document.createTextNode(contact.name);

    a.setAttribute('href', `./contact.html?id=${contact.id}`);

    /*
      PHASE 3: fill in a few lines of code to complete the populateContactlists functions logic...
      - append the text as a child of the a tag
      - append the a tag as a child of the li tag
      - append the li tag as a child of the contactList
    */
  }
}