import {printToDom} from './dom.js';

let pets = [];

const setPets = (newArray) => {
    pets = newArray;
};

const getPetz = () => {
    return pets;
};

const petsBuilder = (petsArray) => {
    let domString = '';
    petsArray.forEach((pet) => {
        domString += `<div class="card border-success mb-3" style="max-width: 18rem;">`;
        domString += `<div class="card-header bg-transparent border-success">${pets.name}</div>`;
        domString += `<img class="card-img-top" src="${pets.imgURL}" alt="${pets.name}">`;
        domString += `<div class="card-body text-success">`;
        domString += `<h5 class="card-title">${pets.type}</h5>`;
        domString += `<p class="card-text">${pets.specialSkill}</p>`;
        domString += `<div class="card-footer bg-transparent border-success">${pet.type}</div>`;
        domString += `</div>`
    });
    printToDom(domString);
};

export{getPetz, setPets, petsBuilder};