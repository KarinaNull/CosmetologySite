import '../css/main.scss';

const priceRed = () => {
    return `
<div id="Injection" class="container">
        <span class="price-text">PRICE</span>
        <p class = "inter-text">Иньекционные процедуры</p>
        <img src="./img/Rectangle.png" alt="Price Icon" class="price-image">
         <img src="./img/redLemon.png" alt="Price Icon"  class="price-image--back">
        <p class = "inter-text--price">Ботокс (1 зона) .......................................................................... 6000 ₽ <br> 
        Контурная пластика губ (гиалуроновая кислота) ..................12000 ₽ <br> 
        Биоревитализация (гиалуроновая кислота) .......................... 9000 ₽ <br> 
        Мезотерапия лица .....................................................................7500 ₽ <br> 
        Плазмотерапия (PRP) ..............................................................10000 ₽
        </p>
    </div>

    `;
}

export default priceRed;

