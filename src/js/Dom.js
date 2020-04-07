/* eslint-disable no-useless-concat */

import {exportArrays} from './Data';

const importedArrays = exportArrays();

const {
    keycode,
    engKeys,
    rusKeys,
    specialKeys,
    specialWidth
} = importedArrays;


const wrapper = document.querySelector('.wrapper');

const header = document.createElement('header');
header.classList.add('header');

const title = document.createElement('h1');
title.classList.add('header__title');
title.innerHTML = 'Virtual keyboard';

const inputField = document.createElement('div');
inputField.classList.add('keyboard__input');

const main = document.createElement('main');
main.classList.add('main');

const texterea = document.createElement('textarea');
texterea.classList.add('texterea');

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

const KeyboardKeysBox = document.createElement('div');
KeyboardKeysBox.classList.add('keyboard__keys-box');

const keyboardInfo = document.createElement('div');
keyboardInfo.classList.add('keyboard__info');

const infoContent = document.createElement('p');
infoContent.classList.add('info__text');
infoContent.innerHTML = 'The keyboard was created in the Windows operating system <br> To switch the language combination: left shift + left alt';


export const renderHTML = () => {
    wrapper.append(header, main);

    header.append(title);

    main.append(keyboard);

    keyboard.append(inputField, KeyboardKeysBox, keyboardInfo);

    keyboardInfo.append(infoContent);

    inputField.append(texterea);

}


const checklang = localStorage.getItem('checklang');
export const renderKeyboad = () => {
    const langKeys = checklang === 1 ? rusKeys : engKeys;
    let i = 0;
    let out = '';
    keycode.forEach((element) => {
        out += `<div class="key" data=${element}>${langKeys[i]}</div>`;
        i += 1;
    });
    document.querySelector('.keyboard__keys-box').innerHTML = out;
}



export const changeSizeSpecialKeys = () => {
    let i = 0;
    specialKeys.forEach((el) => {
        const element = document.querySelectorAll('div[data="' + `${el}` + '"]');
        element.forEach((e) => {
            e.classList.add('special__key');
            e.style.width = `${specialWidth[i]}px`;
            i += 1;
        });
    })
}
