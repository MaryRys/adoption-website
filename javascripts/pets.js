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
    for (let i = 0; i < petsArray.length; i++) {
        domString += `<div class="petsCard">`
        domString +=    `<div class="card border-success mb-3" style="max-width: 18rem;">`;
        domString +=        `<div class="card-header bg-transparent border-success">${petsArray[i].name}</div>`;
        domString +=        `<div class="card-body text-success">`;
        domString +=            `<img class="card-img-top" src="${petsArray[i].imageUrl}" alt="${petsArray[i].name}">`;
        domString +=            `<h5 class="card-title">${petsArray[i].type}</h5>`;
        domString +=              `<p class="card-text">${petsArray[i].specialSkill}</p>`;
        domString +=               `<p class="card-text text-center">color:${petsArray[i].color}</p>`
        domString +=        `</div>`;
        domString +=        `<div class="card-footer bg-transparent border-success">${petsArray[i].type}</div>`;
        domString +=    `</div>`
        domString += `</div>`
    };
    printToDom(domString);
};

export{getPetz, setPets, petsBuilder};