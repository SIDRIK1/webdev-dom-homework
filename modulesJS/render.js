import {
    commentsStats,
    spisokComments,
    formAutorizationRegistration,
    containerComments,
} from './data.js';

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

const renderFunctionAutorization = () => {
    const formAutorization = `
  <div class="login-container">
        <h2 class="login-title">Добро пожаловать</h2>
        
        <form action="">
            <div class="input-group">
                <input type="text" name="login" placeholder="Логин" required>
            </div>
            
            <div class="input-group">
                <input type="password" name="password" placeholder="Пароль" required>
            </div>
            
            <div class="login-buttons">
                <button type="submit" class="btn btn-primary">Войти</button>
                <button type="submit" class="btn btn-secondary">Регистрация</button>
                <button type="button" class="btn btn-guest">Продолжить как гость</button>
            </div>
        </form>
    </div>
`;
    formAutorizationRegistration.innerHTML = '';
    formAutorizationRegistration.innerHTML = formAutorization;
    containerComments.style.display = 'none';
};

const renderFunctionRegistration = () => {
    const formAutorization = `
        <div class="login-container">
            <h2 class="login-title">Регистрация</h2>
            <p class="form-subtitle">Создайте аккаунт за 30 секунд</p>
            
            <form id="registerForm">
                <div class="input-group">
                    <input type="text" name="name" placeholder="  Имя" required>
                </div>
                
                <div class="input-group">
                    <input type="text" name="login" placeholder="  Логин" required>
                </div>
                
                <div class="input-group">
                    <input type="email" name="email" placeholder="  Email (опционально)">
                </div>
                
                <div class="input-group">
                    <input type="password" name="password" placeholder="  Пароль" required minlength="6">
                </div>
                
                <div class="input-group">
                    <input type="password" name="confirmPassword" placeholder="  Подтвердите пароль" required minlength="6">
                </div>
                
                <div class="checkbox-group">
                    <label class="checkbox-label">
                        <input type="checkbox" name="terms" required>
                        <span class="checkmark"></span>
                        Согласен с <a href="#" class="terms-link">условиями</a>
                    </label>
                </div>
                
                <div class="login-buttons">
                    <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
                    <button type="button" id="backToLogin" class="btn btn-secondary">Вернуться ко входу</button>
                </div>
            </form>
        </div>
    `;
    formAutorizationRegistration.innerHTML = formAutorization;
};

export {
    renderFunctionComments,
    renderFunctionAutorization,
    renderFunctionRegistration,
};
