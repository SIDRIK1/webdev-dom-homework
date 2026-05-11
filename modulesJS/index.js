import {
    addCommentHandler,
    globalClickHandler,
    clickNoneAutorization,
    clickRegistration,
    clickToBackAutorization,
} from './handlers.js';
import { fetchGetRequest } from './api.js';
import {
    renderFunctionComments,
    renderFunctionAutorization,
} from './render.js';
import { updateTasks } from './data.js';

renderFunctionAutorization();
// for (let i = 0; i < Infinity; i++) {
//     if (switched == 0) {
//         renderFunctionAutorization();
//     }
//     document
//         .querySelector('.btn-guest')
//         .addEventListener('click', clickNoneAutorization);

//     document
//         .querySelector('.btn-secondary')
//         .addEventListener('click', clickRegistration);

//     if
// }

fetchGetRequest().then(updateTasks).then(renderFunctionComments);

document
    .querySelector('.add-form-button')
    .addEventListener('click', addCommentHandler);

document
    .querySelector('.btn-guest')
    .addEventListener('click', clickNoneAutorization);

document
    .querySelector('.btn-secondary')
    .addEventListener('click', clickRegistration);

document
    .querySelector('.btn-secondary')
    .addEventListener('click', clickRegistration);

document
    .querySelector('.btn-secondary')
    .addEventListener('click', clickToBackAutorization);

document.addEventListener('click', globalClickHandler);
