import {getPets} from './data.js';
import {sortEvents} from './events.js';

const initializeApp = () => {
    getPets();
    sortEvents();
};

initializeApp();
