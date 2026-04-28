import { urlAdress } from './data.js';
import {
    addFormhide,
    commentsList,
    loadingLi,
    addCommentHandler,
} from './handlers.js';

const fetchGetRequest = () => {
    return fetch(urlAdress + 'comments')
        .then((response) => response.json())
        .then(({ comments }) => {
            return comments;
        });
};
const fetchPOSTRequest = () => {
    return fetch(urlAdress + 'comments', {
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
        .then(({ comments }) => {
            addFormhide.style.display = 'flex';
            return comments;
        })
        .catch((error) => {
            if (error.message.includes('Сервер')) {
                addCommentHandler();
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
