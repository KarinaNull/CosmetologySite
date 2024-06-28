import '../css/main.scss';

const record = () => {
    const container = document.createElement('div');
    container.className = 'container';

    container.innerHTML = `
    <div class="noveltyCard--record">
        <img class="noveltyCard__image" src="./img/record.png" alt="Image" style="mix-blend-mode: multiply; margin-right: 100px;">
        <div class="article">
            <h1 class="article__title--record">ХОЧЕШЬ ЗАПИСАТЬСЯ НА ПРОЦЕДУРУ?</h1>
            <div class="dropdown">
                <select id="serviceSelect" class="dropdown-select">
                    <option value="">Выберете услугу</option>
                </select>
                <div class="dropdown-icon">
                    <img src="./img/drop.png" alt="Dropdown Icon">
                </div>
            </div>
            <div class="spacer"></div>
            <div class="dropdown">
                <input type="date" id="dateSelect" class="date-select">
            </div>
            <button id="submitApplication" class="custom-btn">
                Записаться
                <img src="./img/Btn.png" alt="Icon" class="custom-btn__icon">
            </button>
        </div>
    </div>
    `;

    const loadOptions = async (selectElementId, url) => {
        try {
            const response = await fetch(url);
            const text = await response.text();
            console.log(` ${selectElementId}:`, text);

            const options = JSON.parse(text);
            console.log(`Опции для ${selectElementId}:`, options);

            const selectElement = container.querySelector(`#${selectElementId}`);
            selectElement.innerHTML = '';

            options.forEach(option => {
                selectElement.innerHTML += `<option value="${option}">${option}</option>`;
            });
        } catch (error) {
            console.error('Ошибка при загрузке опций:', error);
        }
    };

    loadOptions('serviceSelect', 'http://localhost/AestheticaVite/getOptions.php');

    const submitApplication = async () => {
        const service = document.getElementById('serviceSelect').value;
        const date = document.getElementById('dateSelect').value;

        const data = {
            service: service,
            date: date
        };

        try {
            const response = await fetch('http://localhost/AestheticaVite/submitApplication.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();
            console.log(responseData.message);

            // Показать сообщение пользователю
            alert('Заявка отправлена. Перезвоните оператору для уточнения.');

        } catch (error) {
            console.error('Ошибка при отправке данных на сервер:', error);
        }
    };

    const submitButton = container.querySelector('.custom-btn');
    submitButton.addEventListener('click', submitApplication);

    return container;
};

export default record;
