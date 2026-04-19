import { addCommentHandler, globalClickHandler } from './Obrabotch.js';

document
    .querySelector('.add-form-button')
    .addEventListener('click', addCommentHandler);

document.addEventListener('click', globalClickHandler);
