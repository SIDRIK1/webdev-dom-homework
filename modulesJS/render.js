import { commentsStats, spisokComments } from './data.js';

const renderFunctionComments = () => {
    const commentHTML = commentsStats
        .map((comment) => {
            return `<li class="comment">
          <div class="comment-header">
            <div>${comment.author.name}</div>
            <div>${comment.date}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${comment.text}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes}</span>
              <button class="like-button ${comment.isLiked ? '-active-like' : ''}"></button>
            </div>
          </div>
        </li>`;
        })
        .join('');

    spisokComments.innerHTML = commentHTML;
};

export { renderFunctionComments };
