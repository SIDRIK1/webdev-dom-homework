import { addCommentHandler, globalClickHandler } from './handlers.js';
import { fetchGetRequest } from './fetch.js';

fetchGetRequest();

document
    .querySelector('.add-form-button')
    .addEventListener('click', addCommentHandler);

document.addEventListener('click', globalClickHandler);
