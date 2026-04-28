import { addCommentHandler, globalClickHandler } from './handlers.js';
import { fetchGetRequest } from './api.js';
import { renderFunctionComments } from './render.js';
import { updateTasks } from './data.js';

fetchGetRequest().then(updateTasks).then(renderFunctionComments);

document
    .querySelector('.add-form-button')
    .addEventListener('click', addCommentHandler);

document.addEventListener('click', globalClickHandler);
