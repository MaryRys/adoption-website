import {printToDom} from './dom.js';

let pets = [];

const setPets = (newArray) => {
    pets = newArray;
};

const getPetz = () => {
    return pets;
};

const petsBuilder = () => {
    let domString = '';
    for (let i = 0; i < pets.length; i++) {
        domString += `<div class="petsCard">`
        domString +=    `<div class="card border-success mb-3" style="max-width: 18rem;">`;
        domString +=        `<div class="card-header bg-transparent border-success">${pets[i].name}</div>`;
        domString +=        `<div class="card-body text-success">`;
        domString +=            `<img class="card-img-top" src="${pets[i].imageUrl}" alt="${pets[i].name}">`;
        domString +=            `<h5 class="card-title">${pets[i].type}</h5>`;
        domString +=               `<p class="card-text">${pets[i].specialSkill}</p>`;
        domString +=        `</div>`;
        domString +=        `<div class="card-footer bg-transparent border-success">${pets[i].type}</div>`;
        domString +=    `</div>`
        domString += `</div>`
    };
    printToDom(domString);
};

export{getPetz, setPets, petsBuilder};