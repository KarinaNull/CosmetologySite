import '../css/main.scss';

const foot = () => {
  return `
<div class="container">
  <div class="footer">
    <div class="footer__content">
      <a href="/"><img src="./img/logo.png" alt="Aestetica Logo" class="footer__logo"></a>
      <div class="footer__center">
        <p>Контактная информация: Телефон: +7 (123) 456-78-90 Email: info@vashakompaniya.ru 
        Адрес: г. Москва, ул. Примерная, д. 1</p>
        <p>© 2024 Aestetica. Все права защищены. Политика конфиденциальности | Пользовательское соглашение</p>
      </div>     
      <ul>
      <li>
    <p><a href="http://localhost:5173/contact.html" class="menu__link">Контакты</a></p>
    <p><a href="http://localhost:5173/blog.html" class="menu__link">Блог</a></p>
    <p><a href="http://localhost:5173/AboutAs.html" class="menu__link">О нас</a></p>
      </li>
      <ul>
      <li>
    <p><a href="http://localhost:5173/RecordingPrices.html" class="menu__link">Услуги</a></p>
    <p class="lrg"><a href="http://localhost:5173/personalAccount.html" class="menu__link">Личный кабинет</a></p>
      </li>
     </ul>
     </ul>
     
    </div>
  </div>
</div>

    `;
}

export default foot;