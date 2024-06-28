import './css/main.scss'; // Подключаем SCSS файл
import header from './component/header.js';
import personalAccount from './component/personalAccount.js';
import foot from './component/foot.js';


document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('afterbegin', header());
    document.body.insertAdjacentHTML('beforeend', personalAccount());
    document.body.insertAdjacentHTML('beforeend', foot());
});

