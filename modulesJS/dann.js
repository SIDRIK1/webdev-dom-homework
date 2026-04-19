import { renderFunctionComments } from './render.js';

const spisokComments = document.querySelector('.comments');

const updateTasks = (tasks) => {
    commentsStats = tasks;
};

fetch('https://wedev-api.sky.pro/api/v1/sidorov-alexsandr/comments')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.comments);
        updateTasks(data.comments);
        renderFunctionComments();
    });

let commentsStats = [];

updateTasks();

export { spisokComments, commentsStats, updateTasks };
