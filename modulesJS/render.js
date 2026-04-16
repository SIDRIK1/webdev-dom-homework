import { commentsStats, spisokComments } from './dann.js';

const renderFunctionComments = () => {
    const commentHTML = commentsStats
        .map((comment) => {
            return `<li class="comment">
          <div class="comment-header">
            <div>${comment.name}</div>
            <div>${comment.date}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${comment.comment}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes}</span>
              <button class="like-button ${comment.Clicked ? '-active-like' : ''}"></button>
            </div>
          </div>
        </li>`;
        })
        .join('');

    spisokComments.innerHTML = commentHTML;
};

export { renderFunctionComments };
