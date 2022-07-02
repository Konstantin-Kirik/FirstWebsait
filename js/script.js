"use strict";

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';

// ГЛАВНЫЙ ОБРАБОТЧИК СОБЫТИЙ НА САЙТЕ
window.addEventListener('DOMContentLoaded', function() {
            // показываеться modal окно после некоторого времени открытия
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
            // Изменил значение, чтобы не отвлекало
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]','.modal', modalTimerId);
    timer('.timer', '2022-06-01');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        slide : '.offer__slide',
        container : '.offer__slider',
        nexArrow : '.offer__slider-next',
        prevArrow : '.offer__slider-prev', 
        totalCounter : '#total',
        currentCounter : '#current', 
        wrapper : '.offer__slider-wrapper',
        field : '.offer__slider-inner' 
    });
});