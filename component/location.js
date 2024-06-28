import '../css/main.scss';

const location = () => {
    return `
<div class="container">
    <div class="contact">
        <img class="contact__image" src="./img/map.png" alt="Map Image"> 
        <div class="contact__text">
            <h2>Контактная информация</h2>
            <div class="contact__info">
                <p><strong>Адрес клиники:</strong></p>
                <p>Косметологическая клиника "Aesthetica"<br>
                г. Москва, ул. Тверская, д. 10, стр. 1, офис 15<br>
                Почтовый индекс: 125009</p>

                <p><strong>Телефон для записи:</strong> +7 (901) 790-93-84</p>
                <p><strong>Email:</strong> info@primerkrasoty.ru</p>

                <p><strong>Часы работы:</strong></p>
                <p>Понедельник - Пятница: 09:00 - 21:00<br>
                Суббота - Воскресенье: 10:00 - 18:00</p>
            </div>
        </div>
    </div>
</div>

    `;
}

export default location;