const spisokComments = document.querySelector('.comments');
let commentsStats = [];
const urlAdress = 'https://wedev-api.sky.pro/api/v1/sidorov-aleksan/';

const updateTasks = (tasks) => {
    commentsStats = tasks;
};

export { spisokComments, commentsStats, updateTasks, urlAdress };
