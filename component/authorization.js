import '../css/main.scss';

const auth = () => {
    const formMarkup = `
<div class="container">
 <img class="reg__image" src="./img/Kivi.png" alt="Map Image"> 
 <img class="reg__image--top" src="./img/Kivi.png" alt="Map Image"> 
 <h2 class="reg__title">АВТОРИЗАЦИЯ</h2>
 <form class="registration-form" id="loginForm">
            <input type="text" id="phone" placeholder="Введите ваш номер телефона" class="form-input">
            <input type="password" id="password" placeholder="Введите пароль" class="form-input">
            <div class="g-recaptcha" data-sitekey="6Lef3P4pAAAAAHktuc2ATLbBPyuYavSPGly-8qwK"></div> 
            <div class="spacer"></div>
            <button type="submit" class="form-button">Войти</button>
 </form>
 <a href="http://localhost:5173/registration.html" style="position: absolute; right: 400px; bottom: 10px;">У вас нет аккаунта?<a>
</div>`;

    setTimeout(() => {
        document.getElementById('loginForm').addEventListener('submit', function (event) {
            event.preventDefault();

            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const recaptchaResponse = grecaptcha.getResponse(); // Get the reCAPTCHA response

            if (phone && password && recaptchaResponse) {
                const xmlhttp = new XMLHttpRequest();
                xmlhttp.open("POST", "http://localhost/AestheticaVite/login.php");
                xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xmlhttp.send(`phone=${phone}&password=${password}&g-recaptcha-response=${recaptchaResponse}`);

                xmlhttp.onload = function () {
                    if (xmlhttp.status == 200) {
                        alert("Успех");
                    } else if (xmlhttp.status == 401) {
                        alert("Неправильный телефон или пароль");
                    } else if (xmlhttp.status == 400) {
                        alert("Ошибка проверки reCAPTCHA");
                    } else {
                        alert("Ошибка сервера");
                    }
                };
            } else {
                alert("Пожалуйста, заполните все поля");
            }
        });
    }, 0);

    return formMarkup;
}

export default auth;
