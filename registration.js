import './css/main.scss'; // Подключаем SCSS файл
import header from './component/header.js';
import reg from './component/reg.js';
import foot from './component/foot.js';


document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('afterbegin', header());
    document.body.insertAdjacentHTML('beforeend', reg());
    document.body.insertAdjacentHTML('beforeend', foot());
});

