import '../css/main.scss';

const stocks = () => {


  setTimeout(() => {
    const items = document.querySelectorAll('.reasonsCard__items ');

    items.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s ease';
      });

      item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
      });
    });
  }, 0);


  return `
<div class="container">
  <div class="reasonsCard">
     <img class="reasonsCard__image" src="./img/BigEllipse.png" alt="Center Image"> 
     <img class="reasonsCard__image" src="./img/SmallEllipse.png" alt="Center Image"> 
     <div class="reasonsCard__text-center">АКЦИИ МЕСЯЦА</div>
    <ul class="reasonsCard__left">
      <li class="reasonsCard__items reasonsCard__item--1">
        <h2 class="reasonsCard__title">"Летняя свежесть"</h2>
        <p class="reasonsCard__text--stocks">
         <strong>Скидка 20% на все процедуры по уходу за кожей лица</strong> Позаботьтесь о своей коже в летний период с нашей эксклюзивной скидкой на пилинги, увлажняющие маски и антивозрастные процедуры.
        </p>
        <p class="reasonsCard__count">1</p>
      </li>
      <li class="reasonsCard__items reasonsCard__item--2">
        <h2 class="reasonsCard__title">“Сияние молодости”</h2>
        <p class="reasonsCard__text--stocks">
         <strong>Скидка 15% на инъекции ботокса и филлеров</strong><br>
 Освежите свой внешний вид и верните молодость коже со скидкой 15% на все инъекционные процедуры, включая ботокс и гиалуроновые филлеры.
        </p>
        <p class="reasonsCard__count">2</p>
      </li>
    </ul>
    <ul class="reasonsCard__right">
      <li class="reasonsCard__items reasonsCard__item--3">
        <h2 class="reasonsCard__title">"Очаровательные губы"</h2>
        <p class="reasonsCard__text--stocks">
         <strong>Бесплатная консультация и 10% скидка на увеличение</strong> Хотите придать своим губам больше объема и выразительности? Запишитесь на бесплатную консультацию и получите 10% скидку на процедуру увеличения губ.
        </p>
        <p class="reasonsCard__count">3</p>
      </li>
      <li class="reasonsCard__items reasonsCard__item--4">
        <h2 class="reasonsCard__title">"Антистресс для кожи"</h2>
        <p class="reasonsCard__text--stocks">
           <strong>Скидка 25% на процедуры омоложения и лифтинга </strong>
Снимите стресс и подарите своей коже молодость и упругость с нашими специальными процедурами омоложения и лифтинга со скидкой 25%.
        </p>
        <p class="reasonsCard__count">4</p>
      </li>
    </ul>
  </div>
</div>

    `;
}

export default stocks;

