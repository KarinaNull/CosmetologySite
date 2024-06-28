import '../css/main.scss';

const feedback = () => {
  const formMarkup = `
    <div class="container">
      <img class="BerryImg BerryImg--first" src="./img/B.png" alt="Center Image">
      <img class="BerryImg BerryImg--second" src="./img/berry.png" alt="Center Image">
      <div class="feedback">
        <div class="centered-content">
          <h2>ХОТИТЕ ЗАПИСАТЬСЯ? /ОСТАЛИСЬ ВОПРОСЫ?</h2>
          <p>Нажимая кнопку 'Отправить', вы соглашаетесь с обработкой ваших персональных данных в соответствии с нашей политикой конфиденциальности.</p>
          <div class="input-container">
            <input type="text" id="phone" placeholder="Введите ваш номер телефона">
            <div id="phoneError" class="error-message"></div>
          </div>
          <div class="input-container">
            <input type="text" id="name" placeholder="Введите ваше имя">
            <div id="nameError" class="error-message"></div>
          </div>
        </div>
        <button class="feedback__btn" id="submitBtn">Отправить</button>
      </div>
    </div>
  `;

  setTimeout(() => {
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('mouseover', () => {
      submitBtn.style.transform = 'scale(1.05)';
      submitBtn.style.transition = 'transform 0.3s ease';
    });

    submitBtn.addEventListener('mouseout', () => {
      submitBtn.style.transform = 'scale(1)';
    });

    submitBtn.addEventListener('click', (event) => {
      event.preventDefault();
      validateForm();
    });
  }, 0);

  return formMarkup;
};

const validateForm = () => {
  const phone = document.getElementById('phone').value.trim();
  const name = document.getElementById('name').value.trim();
  let isValid = true;

  clearErrors();

  if (phone === '') {
    showError('phone', 'Поле обязательно для заполнения.');
    isValid = false;
  } else {
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      showError('phone', 'Номер телефона должен состоять из 10 цифр.');
      isValid = false;
    }
  }

  if (name === '') {
    showError('name', 'Поле обязательно для заполнения.');
    isValid = false;
  } else {
    const namePattern = /^[A-Za-zА-Яа-яЁё\s]+$/;
    if (!namePattern.test(name)) {
      showError('name', 'Имя должно содержать только буквы.');
      isValid = false;
    }
  }

  if (isValid) {
    submitForm(phone, name);
  }
};

const submitForm = async (phone, name) => {
  const data = {
    phone: phone,
    name: name
  };

  const response = await fetch('http://localhost/AestheticaVite/submitFeedback.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const responseData = await response.json();

  if (responseData.message) {
    alert('Заявка отправлена. Оператор скоро перезвонит вам.');
    clearFormFields();
  } else {
    alert('Ошибка при отправке данных. Попробуйте снова.');
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
  document.getElementById('name').value = '';
};

export default feedback;
