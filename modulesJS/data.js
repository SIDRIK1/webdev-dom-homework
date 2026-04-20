import { renderFunctionComments } from './render.js';

const spisokComments = document.querySelector('.comments');
export const urlAdress = 'https://wedev-api.sky.pro/api/v1/sidorov-aleksandr/';

export function formatDate(isoDate) {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2); // последние 2 цифры
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

const updateTasks = (tasks) => {
    commentsStats = tasks;
};

fetch(urlAdress + 'comments')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.comments);
        const formattedComments = data.comments.map((comment) => ({
            ...comment,
            date: formatDate(comment.date),
        }));
        updateTasks(formattedComments);
        renderFunctionComments();
    });

let commentsStats = [];

updateTasks();

export { spisokComments, commentsStats, updateTasks };
