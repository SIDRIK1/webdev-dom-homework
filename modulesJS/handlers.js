import { commentsStats, spisokComments } from './data.js';
import { renderFunctionComments } from './render.js';
import { fetchPOSTRequest } from './fetch.js';

const nameInput = document.querySelector('.add-form-name').value;
const textInput = document.querySelector('.add-form-text').value;
const now = new Date();
const dateStr = `${now.getDate().toString().padStart(2, '0')}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getFullYear().toString().slice(-2)} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
const randomLikes = Math.floor(Math.random() * 101);
const addFormhide = document.querySelector('.add-form');
const commentsList = document.querySelector('.comments');
const loadingLi = document.createElement('li');

export const addCommentHandler = () => {
    addFormhide.style.display = 'none';
    loadingLi.className = 'comment loading';
    loadingLi.textContent = 'Пожалуйста подождите, комментарий добавляется...';
    loadingLi.style.cssText =
        'text-align: center; color: #666; font-style: italic;';
    commentsList.appendChild(loadingLi);

    fetchPOSTRequest();

    document.querySelector('.add-form-name').value = '';
    document.querySelector('.add-form-text').value = '';
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

export { nameInput, dateStr, textInput, randomLikes, addFormhide };
