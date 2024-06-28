import '../css/main.scss';

const reasonsCard = () => {


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
     <div class="reasonsCard__text-center">ПОЧЕМУ МЫ?</div>
    <ul class="reasonsCard__left">
      <li class="reasonsCard__items reasonsCard__item--1">
        <h2 class="reasonsCard__title">Квалифицированный персонал</h2>
        <p class="reasonsCard__text">
          Наши специалисты обладают высоким уровнем профессионализма и многолетним опытом в косметологии, обеспечивая вам лучший уход и результаты.
        </p>
        <p class="reasonsCard__count">1</p>
      </li>
      <li class="reasonsCard__items reasonsCard__item--2">
        <h2 class="reasonsCard__title">Сервис и качество</h2>
        <p class="reasonsCard__text">
          Мы гарантируем высокий уровень сервиса и качество предоставляемых услуг, используя только проверенные и эффективные средства.
        </p>
        <p class="reasonsCard__count">2</p>
      </li>
    </ul>
    <ul class="reasonsCard__right">
      <li class="reasonsCard__items reasonsCard__item--3">
        <h2 class="reasonsCard__title">Удобное расположение</h2>
        <p class="reasonsCard__text">
          Мы находимся в легко доступном месте, что позволяет вам совершенно без труда посещать наши многочисленные процедуры и консультации.
        </p>
        <p class="reasonsCard__count">3</p>
      </li>
      <li class="reasonsCard__items reasonsCard__item--4">
        <h2 class="reasonsCard__title">Актуальные знания</h2>
        <p class="reasonsCard__text">
          Наши сотрудники постоянно обновляют свои знания и навыки, чтобы предложить вам самые современные и эффективные методы ухода.
        </p>
        <p class="reasonsCard__count">4</p>
      </li>
    </ul>
  </div>
</div>

    `;
}

export default reasonsCard;

