const spisokComments = document.querySelector('.comments');

let commentsStats = [
    {
        name: 'Глеб Фокин',
        date: '12.02.22 12:18',
        comment: 'Это будет первый комментарий на этой странице',
        likes: '3',
        Clicked: false,
    },
    {
        name: 'Варвара Н.',
        date: '13.02.22 19:22',
        comment: 'Мне нравится как оформлена эта страница! ❤',
        likes: '75',
        Clicked: true,
    },
];

export { spisokComments, commentsStats };
