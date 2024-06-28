const reg = () => {
    const formMarkup = `
        <div class="container">
            <img class="reg__image" src="./img/Kivi.png" alt="Map Image"> 
            <img class="reg__image--top" src="./img/Kivi.png" alt="Map Image"> 
            <h2 class="reg__title">РЕГИСТРАЦИЯ</h2>
            <form id="registrationForm" action="register.php" method="post" class="registration-form">
                <div class="input-container">
                    <input type="text" id="phone" name="phone" placeholder="Введите ваш номер телефона" class="form-input">
                    <div id="phoneError" class="error-message"></div>
                </div>
                <div class="input-container">
                    <input type="email" id="email" name="email" placeholder="Введите вашу электронную почту" class="form-input">
                    <div id="emailError" class="error-message"></div>
                </div>
                <div class="input-container">
                    <input type="text" id="name" name="name" placeholder="Введите ваше имя" class="form-input">
                    <div id="nameError" class="error-message"></div>
                </div>
                <div class="spacer"></div>
                <div class="input-container">
                    <input type="password" id="password" name="password" placeholder="Придумайте пароль" class="form-input">
                    <div id="passwordError" class="error-message"></div>
                </div>
                <div class="input-container">
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Повторите пароль" class="form-input">
                    <div id="confirmPasswordError" class="error-message"></div>
                </div>
                <button type="submit" class="form-button">Зарегистрироваться</button>
            </form>
             <a href="http://localhost:5173/authorization.html" style="position: absolute; right: 400px; bottom: 10px;">У вас уже есть аккаунт?<a>
        </div>
    `;

    // Обработчик события отправки формы
    setTimeout(() => {
        document.querySelector('.registration-form').addEventListener('submit', function (event) {
            event.preventDefault();
            validateForm();
        });
    }, 0);

    return formMarkup;
};

const validateForm = () => {
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const name = document.getElementById('name').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    let isValid = true;

    clearErrors();

    // Проверка номера телефона
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        showError('phone', 'Номер телефона должен состоять из 10 цифр.');
        isValid = false;
    }

    // Проверка email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('email', 'Введите корректный адрес электронной почты.');
        isValid = false;
    }

    // Проверка имени
    const namePattern = /^[A-Za-zА-Яа-яЁё\\s]+$/;
    if (!namePattern.test(name)) {
        showError('name', 'Имя должно содержать только буквы.');
        isValid = false;
    }

    // Проверка пароля
    if (password.length < 6) {
        showError('password', 'Пароль должен содержать не менее 6 символов.');
        isValid = false;
    }

    // Проверка подтверждения пароля
    if (password !== confirmPassword) {
        showError('confirmPassword', 'Пароли не совпадают.');
        isValid = false;
    }

    if (isValid) {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "http://localhost/AestheticaVite/register.php"); //обращение к адресу сервера 
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // показывает что пересылаем форму (которая потом будет прочитана)
        xmlhttp.send(`name=${name}&phone=${phone}&email=${email}&password=${password}`);
        xmlhttp.onload = function () {
            if (xmlhttp.status == 201) {
                alert("Успех");
            } else if (xmlhttp.status == 400) {
                alert("Ошибка");
            }
        };
    }
};

const showError = (fieldId, message) => {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(fieldId + 'Error');
    field.classList.add('error');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
};

const clearErrors = () => {
    const errorFields = document.querySelectorAll('.error');
    errorFields.forEach(field => {
        field.classList.remove('error');
    });

    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(errorMessage => {
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
    });
};

const clearFormFields = () => {
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
};

export default reg;
