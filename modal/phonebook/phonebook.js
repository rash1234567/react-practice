 const nameInput = document.querySelector ('#name')
 const phoneInput = document.querySelector ('#phonenumber')
 const button = document.querySelector ('.btn');
 const searchInput = document.querySelector ('#searchinput')
 const searchButton = document.querySelector ('#search')
 const displayContact =  document.querySelector ('.display');
 
 



 class Contact {
    constructor(name, phoneNumber){
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
}

 const contacts = [];
 button.addEventListener('click', addContact)
  
 function addContact () {
    let name = nameInput.value;
    let phoneNumber = phoneInput.value;
    contacts.push (new Contact (name, phoneNumber));
    let displayDiv = document.createElement('div');
    let nameDisplay = document.createElement('span');
    let numberDisplay = document.createElement('span');
    let nameText = document.createTextNode (`${name}`);
    let numberText = document.createTextNode (`${phoneNumber}`);
    let deleteButton = document.createElement ('button');
    let deleteText = document.createTextNode ('delete');
    deleteButton.appendChild(deleteText)
    nameDisplay.appendChild(nameText);
    numberDisplay.appendChild(numberText);
    displayDiv.appendChild(nameDisplay);
    displayDiv.appendChild(numberDisplay);
    displayDiv.appendChild(deleteButton);
    deleteButton.style.backgroundColor = 'red'
    displayContact.appendChild (displayDiv);
    displayDiv.style.borderBottomStyle = 'solid';
    displayDiv.style.height = '20px' 
    nameDisplay.style.marginLeft = '10px';
    numberDisplay.style.marginLeft = '30%';
    deleteButton.style.marginLeft= '10px';
    displayDiv.style.position = 'relative'
    deleteButton.style.position = 'absolute';
    deleteButton.style.right = '0';
    deleteButton.addEventListener('click', deleteContact);
    function deleteContact () {
    let x =  contacts.findIndex ((Contact)=> Contact.name == nameText.nodeValue);
     contacts.splice (x, 1);
     displayContact.removeChild(displayDiv)
} 

function searchContact () {
   let x =  contacts.findIndex ((Contact)=> Contact.name == searchInput.value);
   contacts.find (x)
   
}

}






