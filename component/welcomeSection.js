import '../css/main.scss';

const welcomeSection = () => {
  return `
<div class="container">
  <div class="photoCard">
    <div class="photoCard__left">
      <div class="searchBar">
        <img class="searchBar__icon-left" src="./img/Search.png" alt="Left Icon">
        <p class="searchBar__text">Косметологическая клиника в Москве</p>
        <img class="searchBar__icon-right" src="./img/Cancel.png" alt="Right Icon">
        <img class="lemon lemon--top" src="./img/lemon.png" alt="Lemon Icon">
        <img class="lemon lemon--bottom" src="./img/lemon.png" alt="Lemon Icon">
      </div>
    </div>
    <div class="photoCard__right">
    </div>
  </div>
</div>
    `;
}

export default welcomeSection;
