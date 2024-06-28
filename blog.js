import './css/main.scss'; // Подключаем SCSS файл
import header from './component/header.js';
import noveltyCard from './component/noveltyCard.js';
import colorlessNoveltyCard from './component/colorlessNoveltyCard.js';
import reversenoveltyCard from './component/reverseNoveltyCard.js';
import reversecolorlessNoveltyCard from './component/reversecolorlessNoveltyCard.js';
import transition from './component/transition.js';
import foot from './component/foot.js';
import stocks from './component/stocks.js';
import feedback from './component/feedback.js';

document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('afterbegin', header());
    document.body.insertAdjacentHTML('beforeend', noveltyCard());
    document.body.insertAdjacentHTML('beforeend', colorlessNoveltyCard());
    document.body.insertAdjacentHTML('beforeend', reversenoveltyCard());
    document.body.insertAdjacentHTML('beforeend', reversecolorlessNoveltyCard());
    document.body.insertAdjacentHTML('beforeend', stocks());
    document.body.insertAdjacentHTML('beforeend', transition());
    document.body.insertAdjacentHTML('beforeend', feedback());
    document.body.insertAdjacentHTML('beforeend', foot());
});

