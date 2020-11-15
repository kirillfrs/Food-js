"use strict";
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import cards from './modules/createCard';
import modal from './modules/modalWindow';
import timer from './modules/timer';
import form from './modules/form';
import slider from './modules/slider';
import calculator from './modules/calculator';
import { openModal } from './modules/modalWindow';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal(`.modal`, modalTimerId), 120000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    cards();
    modal(`[data-modal]`, `.modal`, modalTimerId);
    timer('.timer', '2020-12-06 23:58');
    form('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        currentCounter: '#current',
        totalCounter: '#total',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    calculator();
});

