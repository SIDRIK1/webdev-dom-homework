import { formatedDateComments } from './function.js';
const spisokComments = document.querySelector('.comments');
let commentsStats = [];
const urlAdress = 'https://wedev-api.sky.pro/api/v1/sidorov-aleksan/';

let updateTasks = (tasksMasiv) => {
    commentsStats = formatedDateComments(tasksMasiv);
};

export { spisokComments, commentsStats, updateTasks, urlAdress };
