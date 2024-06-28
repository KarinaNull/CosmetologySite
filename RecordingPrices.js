import './css/main.scss';
import header from './component/header.js';
import services from './component/services.js';
import feedback from './component/feedback.js';
import reviews from './component/reviews.js';
import blogCard from './component/blogCard.js';
import priceKivi from './component/priceKivi.js';
import priceRed from './component/priceRed.js';
import price from './component/price.js';
import foot from './component/foot.js';
import record from './component/record.js';

document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('afterbegin', header());
    document.body.insertAdjacentHTML('beforeend', services());
    document.body.insertAdjacentHTML('beforeend', blogCard());
    document.body.insertAdjacentHTML('beforeend', priceKivi());

    const recordElement = record();
    document.body.appendChild(recordElement);

    document.body.insertAdjacentHTML('beforeend', price());
    document.body.insertAdjacentHTML('beforeend', priceRed());
    document.body.insertAdjacentHTML('beforeend', price());
    document.body.insertAdjacentHTML('beforeend', reviews());
    document.body.insertAdjacentHTML('beforeend', feedback());
    document.body.insertAdjacentHTML('beforeend', foot());
});
