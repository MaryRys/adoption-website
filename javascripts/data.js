import {getPetz, setPets} from '../javascripts/pets';

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setPets(data.pets);
    console.log(getPets());
    // petsBuilder(getgetPetz());
}

function executeThisCodeIfXhrFails () {
    console.log('shit broke');
}

const getPets = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/pets.json');
    myRequest.send();
};