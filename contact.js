import './css/main.scss'; // Подключаем SCSS файл
import header from './component/header.js';
import feedback from './component/feedback.js';
import location from './component/location.js';
import foot from './component/foot.js';


document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('afterbegin', header());
    document.body.insertAdjacentHTML('beforeend', location());
    document.body.insertAdjacentHTML('beforeend', feedback());
    document.body.insertAdjacentHTML('beforeend', foot());
});

