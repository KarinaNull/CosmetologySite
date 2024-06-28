import './css/main.scss'; // Подключаем SCSS файл
import header from './component/header.js';
import AboutAs from './component/AboutAs.js';
import AboutAs2 from './component/AboutAs2.js';
import transitionWeb from './component/transitionWeb.js';
import feedback from './component/feedback.js';
import foot from './component/foot.js';


document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('afterbegin', header());
    document.body.insertAdjacentHTML('beforeend', AboutAs());
    document.body.insertAdjacentHTML('beforeend', transitionWeb());
    document.body.insertAdjacentHTML('beforeend', AboutAs2());
    document.body.insertAdjacentHTML('beforeend', feedback());
    document.body.insertAdjacentHTML('beforeend', foot());
});

