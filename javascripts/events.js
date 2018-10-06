import {petsBuilder, getPetz} from './pets.js';




// Filter to sort pets
const sortPets = (e) => {
    const pets = getPetz();
    const type = e.target.id;
    if(type === 'all'){
        petsBuilder(pets);
    } else {
        const filteredPets = pets.filter(x => x.type === type);
        petsBuilder(filteredPets);
    }
    // console.log('sortPets() I work');
}

const sortEvents = () => {
    const allButton = document.getElementById('all');
    const catButton = document.getElementById('cat');
    const dogButton = document.getElementById('dog');
    const dinoButton = document.getElementById('dino');
    allButton.addEventListener('click', sortPets);
    catButton.addEventListener('click', sortPets);
    dogButton.addEventListener('click', sortPets);
    dinoButton.addEventListener('click', sortPets);
};


export{sortEvents};