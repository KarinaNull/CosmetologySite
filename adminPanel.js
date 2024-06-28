import './css/main.scss'; // Подключаем SCSS файл

import admtable from './component/admtable.js';

document.addEventListener('DOMContentLoaded', () => {


    const tableContainer = admtable();
    document.body.appendChild(tableContainer);


});
