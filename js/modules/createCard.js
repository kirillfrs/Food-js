import { getResource } from '../services/services';

function createCard() {
    // используем классы для карточек

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changetoUah();
        }
        changetoUah() {
            this.price = this.price * this.transfer;
        }
        render() {
            const elem = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = "menu__item";
                elem.classList.add(this.classes);
            } else {
                this.classes.forEach(className => elem.classList.add(className));
            }

            elem.innerHTML =
                `<img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>`;
            this.parent.append(elem);
        }
    }



    getResource(`http://localhost:3000/menu`)
        .then(data => {
            data.forEach(({ img, altimg, title, descr, price }) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });


    //библиотека аксинус

    // axios.get('http://localhost:3000/menu')
    //     .then(data => {
    //         data.data.forEach(({ img, altimg, title, descr, price }) => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //         });
    //     });

    // Вариант попроще создаем верстку на лету
    // создаем функцию для верстки
    // function createCard(data) {
    //     data.forEach(({ img, altimg, title, descr, price }) => {
    //         const elem = document.createElement('div');
    //         elem.classList.add('menu__item');
    //         elem.innerHTML = `
    //         <img src=${img} alt=${altimg}>
    // <h3 class="menu__item-subtitle">${title}</h3>
    // <div class="menu__item-descr">${descr}</div>
    // <div class="menu__item-divider"></div>
    // <div class="menu__item-price">
    // <div class="menu__item-cost">Цена:</div>
    // <div class="menu__item-total"><span>${price}</span> грн/день</div>`;
    //         document.querySelector('.menu .container').append(elem);

    //     });
    // }

    // getResource(`http://localhost:3000/menu`).then(data => createCard(data));



}

export default createCard;