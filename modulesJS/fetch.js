import { urlAdress, updateTasks } from './data.js';
import { renderFunctionComments } from './render.js';
import {
    addFormhide,
    commentsList,
    loadingLi,
    addCommentHandler,
} from './handlers.js';

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
            forceError: true,
        }),
    })
        .then((response) => {
            if (response.ok) {
                document.querySelector('.add-form-name').value = '';
                document.querySelector('.add-form-text').value = '';
                return fetch(urlAdress + 'comments');
            } else if (response.status == '500') {
                throw new Error('Сервер не отвечает попробуйте позже');
            } else {
                throw new Error(
                    'Имя и текст сообщения должны быть больше 3 символов',
                );
            }
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
        })
        .catch((error) => {
            if (error.message.includes('Сервер')) {
                addCommentHandler();
                // document.querySelector('.add-form-name').value = '';
                // document.querySelector('.add-form-text').value = '';
                // commentsList.removeChild(loadingLi);
                // addFormhide.style.display = 'flex';
                // alert('Сервер не отвечает, попробуйте позже');
            } else if (error.message.includes('3')) {
                commentsList.removeChild(loadingLi);
                addFormhide.style.display = 'flex';
                alert('Имя и текст должны быть >3 символов');
            } else {
                commentsList.removeChild(loadingLi);
                addFormhide.style.display = 'flex';
                alert('Пожалуйста проверьте подключение к сети');
            }
        });
};

export { fetchGetRequest, fetchPOSTRequest };
