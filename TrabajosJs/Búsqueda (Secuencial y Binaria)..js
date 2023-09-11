let array = [3,6,1,8,2,3,6,3,2,5,6];


function numeroMasRepetido(array) {
    let contador = {};
    let numeroMasRepetido;
    let maxRepeticiones = 0;

    for (let i = 0; i < array.length; i++) {
        const numero = array[i];
        if (contador[numero] === undefined) {
            contador[numero] = 1;
        } else {
            contador[numero]++;
        }

        if (contador[numero] > maxRepeticiones) {
            maxRepeticiones = contador[numero];
            numeroMasRepetido = numero;
        }
    }

    return numeroMasRepetido;
}

////////////////////////////////////////////////////////////////////////

let arrayWhitWord = [8,'e',7,2,'a','d','f',2,3,1,4,3];

function words(array) {
    let onlyWords = [];
    for (let index = 0; index < array.length; index++) {
        if (isNaN(array[index])) {
            onlyWords.push(array[index]); 
        }
    }
    return onlyWords; 
}

////////////////////////////////////////////////////////////////////////
let array2 = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];

function big(array) {
    let biggestNumber = array[0]; 

    for (let i = 1; i < array.length; i++) {
        if (array[i] > biggestNumber) {
            biggestNumber = array[i]; 
        }
    }

    return biggestNumber;
}

function little(array) {
    let smallestNumber = array[0]; 

    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestNumber) {
            smallestNumber = array[i]; 
        }
    }

    return smallestNumber;
}

/////////////////////////////////////////////////////////////

class Contact {
    constructor(name, lastName, phone) {
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
    }
}

class ContactList {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    searchContactByName(name) {
        return this.contacts.filter(contact => contact.name === name);
    }
}


const contactList = new ContactList();

const contact1 = new Contact('taco', 'juan', '123-456-7890');
const contact2 = new Contact('jonh', 'smith', '987-654-3210');
const contact3 = new Contact('Alexei', 'mataosos', '555-123-4567');

contactList.addContact(contact1);
contactList.addContact(contact2);
contactList.addContact(contact3);
