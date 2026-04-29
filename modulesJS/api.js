import { urlAdress } from './data.js';

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
    });
};

export { fetchGetRequest, fetchPOSTRequest };
