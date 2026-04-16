// Код писать здесь

// const spisokComments = document.querySelector('.comments');

// let commentsStats = [
//     {
//         name: 'Глеб Фокин',
//         date: '12.02.22 12:18',
//         comment: 'Это будет первый комментарий на этой странице',
//         likes: '3',
//         Clicked: false,
//     },
//     {
//         name: 'Варвара Н.',
//         date: '13.02.22 19:22',
//         comment: 'Мне нравится как оформлена эта страница! ❤',
//         likes: '75',
//         Clicked: true,
//     },
// ];

//   const renderFunctionComments = () => {
//       const commentHTML = commentsStats.map((comment) => {
//               return `<li class="comment">
//   <div class="comment-header">
//     <div>${comment.name}</div>
//     <div>${comment.date}</div>
//   </div>
//   <div class="comment-body">
//     <div class="comment-text">
//       ${comment.comment}
//     </div>
//   </div>
//   <div class="comment-footer">
//     <div class="likes">
//       <span class="likes-counter">${comment.likes}</span>
//       <button class="like-button ${comment.Clicked ? '-active-like' : ''}"></button>
//     </div>
//   </div>
// </li>`;
//           })
//           .join('');

//       spisokComments.innerHTML = commentHTML;
//   };

// renderFunctionComments();

// document
//     .querySelector('.add-form-button')
//     .addEventListener('click', () => {
//         const commentsList = document.querySelector('.comments');
//         const nameInput =
//             document.querySelector('.add-form-name').value;
//         const textInput =
//             document.querySelector('.add-form-text').value;
//         const now = new Date();
//         const dateStr = `${now.getDate().toString().padStart(2, '0')}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getFullYear().toString().slice(-2)} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
//         const randomLikes = Math.floor(Math.random() * 101);

//         if (!nameInput.trim() || !textInput.trim()) {
//             alert('Заполните имя и комментарий!');
//             return;
//         }

//         commentsStats.push({
//             name: nameInput,
//             date: dateStr,
//             comment: textInput,
//             likes: randomLikes,
//             Clicked: false,
//         });

//         document.querySelector('.add-form-name').value = '';
//         document.querySelector('.add-form-text').value = '';

//         renderFunctionComments();
//     });

// const escapeHtml = (text) => {
//     const map = {
//         '&': '&amp;',
//         '<': '&lt;',
//         '>': '&gt;',
//         '"': '&quot;',
//         "'": '&#039;',
//     };
//     return text.replace(/[&<>"']/g, (m) => map[m]);
// };

// document.addEventListener('click', function (e) {
//     if (e.target.classList.contains('like-button')) {
//         const button = e.target;
//         const commentElement = button.closest('.comment');
//         const likesContainer = button.closest('.likes');
//         const counter = likesContainer.querySelector('.likes-counter');

//         const index = Array.from(spisokComments.children).indexOf(
//             commentElement,
//         );

//         commentsStats[index].Clicked = !commentsStats[index].Clicked;

//         const currentLikes = parseInt(counter.textContent) || 0;
//         commentsStats[index].likes = commentsStats[index].Clicked
//             ? (currentLikes + 1).toString()
//             : Math.max(0, currentLikes - 1).toString();

//         renderFunctionComments();
//     } else if (
//         e.target.closest('.comment') &&
//         !e.target.closest('.like-button') &&
//         !e.target.closest('.likes')
//     ) {
//         const commentElement = e.target.closest('.comment');
//         const index = Array.from(spisokComments.children).indexOf(
//             commentElement,
//         );
//         const comment = commentsStats[index];

//         const replyPrefix = `Re: ${comment.name}\nОтвет на: "${comment.comment}" \n`;

//         document.querySelector('.add-form-text').value = replyPrefix;
//         document.querySelector('.add-form-text').focus();
//     }
// });
