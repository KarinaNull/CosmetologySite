import './css/main.scss'; // Подключаем SCSS файл
import header from './component/header.js';
import auth from './component/authorization.js';
import foot from './component/foot.js';


document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('afterbegin', header());
    document.body.insertAdjacentHTML('beforeend', auth());
    document.body.insertAdjacentHTML('beforeend', foot());
});

