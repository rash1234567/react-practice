const openDivTwo = document.querySelector ('.opendivtwo');
const divTwo = document.querySelector ('.divtwo');
const divOne = document.querySelector ('.divone');
const divThree = document.querySelector ('.divthree');
const openDivThree = document.querySelector ('.opendivthree');
const openDivOne = document.querySelector ('.opendivone');

openDivTwo.addEventListener ('click', popUpTwo);

function popUpTwo () {
    divTwo.style.zIndex = 3;
    divThree.style.zIndex = 2;
    divOne.style.zIndex = 1;

};

openDivThree.addEventListener ('click', popUpThree);

function popUpThree () {
    divThree.style.zIndex = 3;
    divOne.style.zIndex = 2;
    divTwo.style.zIndex = 1;

};

openDivOne.addEventListener ('click', popUpOne);

function popUpOne() {
    divOne.style.zIndex = 3;
    divTwo.style.zIndex = 2;
    divThree.style.zIndex = 1;
};

//const contacts = [];

/*function myFunction(a, b) {
    return a * b   
}

myFunction = (a, b) => a * b

namePhone = (name, phoneNumber) => console.log (`${name} ${phonenumber}`)
*/

//let n = contacts.indexOf ('rasheedat')

//console.log (n);

/*let r = contacts.splice (n, 1)
contacts.push('hafsah')
console.log (contacts)
 
contacts.push('rasheedah', 'hafsah')
contacts.splice (1,1)

console.log (contacts)*/



/*class Contact {
    constructor(name, phonenumber) {
        this.name = name;
        this.phonenumber = phonenumber;
    }
}


const Contacts = [];
Contacts.push(new Contact ('rasheedat', '08091408145'), new Contact('sherif', '07064413800'), new Contact ('kulikuli', '09012345678'));

//console.log (CONTACTS.findIndex('kulikuli'))

let x = Contacts.findIndex((Contact)=> Contact.name== 'kulikuli')
    
Contacts.splice (x, 1)
console.log (Contacts);
 when adding a contact we collect the phone number and the person name*/


 