import { formatedDateComments } from './function.js';
const spisokComments = document.querySelector('.comments');
const formAutorizationRegistration = document.querySelector('.formForInput');
const containerComments = document.querySelector('.container');
let switched = 0;

let commentsStats = [];
const urlAdress = 'https://wedev-api.sky.pro/api/v1/sidorov-aleksan/';

let updateTasks = (tasksMasiv) => {
    commentsStats = formatedDateComments(tasksMasiv);
};

export {
    spisokComments,
    commentsStats,
    updateTasks,
    urlAdress,
    formAutorizationRegistration,
    containerComments,
    switched,
};
