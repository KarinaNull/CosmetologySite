import '../css/main.scss';

const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
  document.getElementById("phone").innerHTML = this.responseText.split('&')[0];
  document.getElementsByClassName("registration-form__fio")[0].innerHTML = this.responseText.split('&')[1];
  document.getElementById("registration-form__email").innerHTML = this.responseText.split('&')[2];
}
xhttp.open("GET", "http://localhost/AestheticaVite/login.php");
xhttp.send();


const AboutAs = () => {
  return `<div class="container">
  <img class="reg__image--lkb" src="./img/redlemon.png" alt="Map Image"> 
  <img class="reg__image--lk" src="./img/lemon.png" alt="Map Image"> 
  <h2 class="reg__title">ЛИЧНЫЙ КАБИНЕТ</h2>
  <form class="registration-form">
    <div class="top-lk">
      <img class="registration-form__image" src="./img/person.png" alt="Image" style="mix-blend-mode: multiply">
      <p class="registration-form__fio">Нафанова Карина Максимовна</p>

    </div>
    
    <div class="info-row">
      <div class="registration-form__block">
        <img class="registration-form__icon--telephone" src="./img/telephone.png" alt="Image" style="mix-blend-mode: multiply">
        <div class="registration-form__text">
          <h2>Телефон</h2>
          <p id="phone">+7(901)790-93-84 <br> +7(901)790-93-84</p>
        </div>
      </div>

      <div class="registration-form__block">
        <img class="registration-form__icon" src="./img/email.png" alt="Image" style="mix-blend-mode: multiply">
        <div class="registration-form__text">
          <h2>Электронная почта</h2>
          <p id="registration-form__email">info@primerkrasoty.ru</p>
        </div>
      </div>
    </div>
  </form>
</div>
    `;
}

export default AboutAs;

