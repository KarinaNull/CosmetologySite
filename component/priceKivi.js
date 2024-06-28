import '../css/main.scss';

const priceKivi = () => {
    return `
<div id="additional-services" class="container">
        <span class="price-text">PRICE</span>
        <p class = "inter-text">Дополнительные услуги</p>
        <img src="./img/Rectangle.png" alt="Price Icon" class="price-image">
         <img src="./img/kivi.png" alt="Price Icon"  class="price-image--back">
        <p class = "inter-text--price">Консультация косметолога .......................................................1000 ₽ <br> 
        Диагностика кожи ......................................................................1500 ₽ <br>
        Коррекция бровей .....................................................................1000 ₽ <br> 
        Окрашивание ресниц и бровей ................................................1500 ₽<br> 
        Ламинирование ресниц ............................................................3000 ₽ <br>
        </p>
    </div>

    `;
}

export default priceKivi;

