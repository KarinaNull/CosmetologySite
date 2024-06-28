import '../css/main.scss';

const services = () => {
    setTimeout(() => {
        const cards = document.querySelectorAll('.servisesCard__item, .servisesCard__item--righttop, .servisesCard__item--rightbuttom, .servisesCard__item--background-5, .servisesCard__item--background-6, .servisesCard__item--background-7');
        cards.forEach(card => {
            card.addEventListener('mouseover', () => {
                card.style.transform = 'scale(1.05)';
                card.style.transition = 'transform 0.3s ease, filter 0.3s ease';
                card.style.filter = 'brightness(1.1)';
            });
            card.addEventListener('mouseout', () => {
                card.style.transform = 'scale(1)';
                card.style.filter = 'none';
            });
        });
    }, 0);

    return `
        <div class="container">
            <h2 class="MainServisesTitle">НАШИ УСЛУГИ/ КОСМЕТОЛОГИЯ</h2>
            <p class="MainServisesSubtitle">*Наличие акций месяца уточнять у администратора</p>
            <div class="servisesCard">
                <ul class="servisesCard__left">
                    <li class="servisesCard__item servisesCard__item--background-1">
                        <h2 class="servisesCard__title">Консультации</h2>
                        <a href="./RecordingPrices.html">
                            <img class="servisesCard__image" src="./img/arrow.png" alt="Center Image">
                        </a>
                    </li>
                    <li class="servisesCard__item servisesCard__item--background-2">
                        <h2 class="servisesCard__title">Коррекция филлерами</h2>
                        <a href="#Injection">
                            <img class="servisesCard__image" src="./img/arrow.png" alt="Center Image">
                        </a>
                    </li>
                    <ul class="servisesCard__left--right">
                        <li class="servisesCard__item--righttop servisesCard__item--background-3">
                            <h2 class="servisesCard__title">Чистки</h2>
                            <a href="#body-care">
                                <img class="servisesCard__image" src="./img/arrow.png" alt="Center Image">
                            </a>
                        </li>
                        <li class="servisesCard__item--rightbuttom servisesCard__item--background-4">
                            <h2 class="servisesCard__title">Уходовые процедуры</h2>
                            <a href="#body-care">
                                <img class="servisesCard__image" src="./img/arrow.png" alt="Center Image">
                            </a>
                        </li>
                    </ul>
                </ul>
            </div>
            <ul class="servisesCard__bottom">
                <li class="servisesCard__item--background-5">
                    <h2 class="servisesCard__title">Пиллинги</h2>
                    <a href="#body-care">
                        <img class="servisesCard__image" src="./img/arrow.png" alt="Center Image">
                    </a>
                </li>
                <li class="servisesCard__item--background-6">
                    <h2 class="servisesCard__title--center">Лечение акне</h2>
                    <a href="#body-care">
                        <img class="servisesCard__image" src="./img/arrow.png" alt="Center Image">
                    </a>
                </li>
                <li class="servisesCard__item--background-7">
                    <h2 class="servisesCard__title--localcenter">Больше направлений/узнать подробнее</h2>
                    <a href="#additional-services">
                        <img class="servisesCard__image" src="./img/arrow.png" alt="Center Image">
                    </a>
                </li>
            </ul>
        </div>
    `;
};

export default services;
