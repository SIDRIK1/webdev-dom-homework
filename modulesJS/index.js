import { renderFunctionComments } from './render.js';
import { addCommentHandler, globalClickHandler } from './Obrabotch.js';

renderFunctionComments();

document
    .querySelector('.add-form-button')
    .addEventListener('click', addCommentHandler);

document.addEventListener('click', globalClickHandler);
