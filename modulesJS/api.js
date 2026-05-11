import { urlAdress } from './data.js';

const fetchGetRequest = () => {
    return fetch(urlAdress + 'comments')
        .then((response) => response.json())
        .then(({ comments }) => {
            return comments;
        });
};

function fetchPostRequest(name, date, text, likes) {
    return fetch(urlAdress + 'comments', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            date: date,
            text: text,
            likes: likes,
            isLiked: false,
            forceError: true,
        }),
    });
}

export { fetchGetRequest, fetchPostRequest };
