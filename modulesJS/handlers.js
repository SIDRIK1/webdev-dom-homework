import {
    commentsStats,
    spisokComments,
    updateTasks,
    formAutorizationRegistration,
    containerComments,
    urlAdress,
    // randomLikesForComments,
} from './data.js';
import {
    renderFunctionComments,
    renderFunctionRegistration,
    renderFunctionAutorization,
} from './render.js';
import { fetchPostRequest } from './api.js';

const addFormhide = document.querySelector('.add-form');
const commentsList = document.querySelector('.comments');
const loadingLi = document.createElement('li');

export const addCommentHandler = () => {
    const nameFromFormVvod = document.querySelector('.add-form-name').value;
    const dateNew = new Date();
    const textFromVvodForm = document.querySelector('.add-form-text').value;
    let randomLikesForComments = Math.floor(Math.random() * 101);
    addFormhide.style.display = 'none';
    loadingLi.className = 'comment loading';
    loadingLi.textContent = 'Пожалуйста подождите, комментарий добавляется...';
    loadingLi.style.cssText =
        'text-align: center; color: #666; font-style: italic;';
    commentsList.appendChild(loadingLi);

    fetchPostRequest(
        nameFromFormVvod,
        dateNew,
        textFromVvodForm,
        randomLikesForComments,
    )
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
            return comments;
        })
        .catch((error) => {
            if (error.message.includes('Сервер')) {
                addCommentHandler();
            } else if (error.message.includes('3')) {
                commentsList.removeChild(loadingLi);
                alert('Имя и текст должны быть >3 символов');
            } else {
                commentsList.removeChild(loadingLi);
                alert('Пожалуйста проверьте подключение к сети');
            }
        })
        .then(updateTasks)
        .then(renderFunctionComments);
    addFormhide.style.display = 'flex';
};

export const globalClickHandler = (e) => {
    if (e.target.classList.contains('like-button')) {
        const button = e.target;
        const commentElement = button.closest('.comment');
        const likesContainer = button.closest('.likes');
        const counter = likesContainer.querySelector('.likes-counter');

        const index = Array.from(spisokComments.children).indexOf(
            commentElement,
        );

        commentsStats[index].isLiked = !commentsStats[index].isLiked;

        const currentLikes = parseInt(counter.textContent) || 0;
        commentsStats[index].likes = commentsStats[index].isLiked
            ? (currentLikes + 1).toString()
            : Math.max(0, currentLikes - 1).toString();

        renderFunctionComments();
    } else if (
        e.target.closest('.comment') &&
        !e.target.closest('.like-button') &&
        !e.target.closest('.likes')
    ) {
        const commentElement = e.target.closest('.comment');
        const index = Array.from(spisokComments.children).indexOf(
            commentElement,
        );
        const comment = commentsStats[index];

        const replyPrefix = `Re: ${comment.author.name}\nОтвет на: "${comment.text}" \n`;

        document.querySelector('.add-form-text').value = replyPrefix;
        document.querySelector('.add-form-text').focus();
    }
};

export const clickNoneAutorization = () => {
    formAutorizationRegistration.style.display = 'none';
    containerComments.style.display = 'flex';
};

export const clickRegistration = () => {
    renderFunctionRegistration();
};

export const clickToBackAutorization = () => {
    renderFunctionAutorization();
};

export { addFormhide, commentsList, loadingLi };
