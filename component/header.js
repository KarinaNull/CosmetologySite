import '../css/main.scss';

const header = () => {
    return `
<header>
    <div class="container">
        <nav class="menu">
            <ul class="menu menu__left">
                <li class="menu__items"><a href="/"><img class="menu__logo" src="/img/logo.png" alt="Logo"></a></li>
            </ul>

            <ul class="menu menu__right menu__right--first">
                <li class="menu__items"><a href="http://localhost:5173/contact.html" class="menu__link"><p class="menu__text">Контакты</p></a></li>
            </ul>

            <ul class="menu menu__right menu__right--second">
                <li class="menu__items"><a href="http://localhost:5173/RecordingPrices.html" class="menu__link"><p class="menu__text">Услуги</p></a></li>
                <li class="menu__items"><a href="http://localhost:5173/AboutAs.html" class="menu__link"><p class="menu__text">О нас</p></a></li>
                <li class="menu__items"><a href="http://localhost:5173/blog.html" class="menu__link"><p class="menu__text">Блог</p></a></li>
            </ul>

            <ul class="menu menu__right menu__right--third">
                <li class="menu__items"><a href="http://localhost:5173/registration.html" class="menu__link"><p class="menu__text">Личный кабинет</p></a></li>
            </ul>
        </nav>
    </div>
</header>

    `;
}

export default header;
