import { urlAdress, updateTasks } from './data.js';
import { renderFunctionComments } from './render.js';
import { addFormhide } from './handlers.js';

const fetchGetRequest = () => {
    return fetch(urlAdress + 'comments')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.comments);
            const formattedComments = data.comments.map((comment) => {
                const date = new Date(comment.date);
                const day = String(date.getDate()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const year = date.getFullYear().toString().slice(-2);
                const hours = String(date.getHours()).padStart(2, '0');
                const minutes = String(date.getMinutes()).padStart(2, '0');
                const seconds = String(date.getSeconds()).padStart(2, '0');

                return {
                    ...comment,
                    date: `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`,
                };
            });
            updateTasks(formattedComments);
            renderFunctionComments();
        });
};

const fetchPOSTRequest = () => {
    fetch(urlAdress + 'comments', {
        method: 'POST',
        body: JSON.stringify({
            name: document.querySelector('.add-form-name').value,
            date: new Date(),
            text: document.querySelector('.add-form-text').value,
            likes: Math.floor(Math.random() * 101),
            isLiked: false,
        }),
    })
        .then(() => {
            return fetch(urlAdress + 'comments');
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const formattedComments = data.comments.map((comment) => {
                const date = new Date(comment.date);
                const day = String(date.getDate()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const year = date.getFullYear().toString().slice(-2);
                const hours = String(date.getHours()).padStart(2, '0');
                const minutes = String(date.getMinutes()).padStart(2, '0');
                const seconds = String(date.getSeconds()).padStart(2, '0');

                return {
                    ...comment,
                    date: `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`,
                };
            });
            addFormhide.style.display = 'flex';
            updateTasks(formattedComments);
            renderFunctionComments();
        });
};

export { fetchGetRequest, fetchPOSTRequest };
