import './css/main.scss'; // Подключаем SCSS файл
import header from './component/header.js'; // Путь к файлу компонента header
import welcomeSection from './component/welcomeSection.js'; // Импортируем функцию welcomeSection
import reasonsCard from './component/reasonsCard.js'; // Импортируем функцию reasonsCard
import services from './component/services.js';
import feedback from './component/feedback.js';
import foot from './component/foot.js';

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', header());
  document.body.insertAdjacentHTML('beforeend', welcomeSection());
  document.body.insertAdjacentHTML('beforeend', reasonsCard());
  document.body.insertAdjacentHTML('beforeend', services());
  document.body.insertAdjacentHTML('beforeend', feedback());
  document.body.insertAdjacentHTML('beforeend', foot());
});
