import { addCommentHandler, globalClickHandler } from './handlers.js';

document
    .querySelector('.add-form-button')
    .addEventListener('click', addCommentHandler);

document.addEventListener('click', globalClickHandler);
