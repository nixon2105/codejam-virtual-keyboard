/* eslint-disable no-const-assign */
/* eslint-disable no-unused-expressions */
import '../css/style.css';
import '../css/style.scss';
import {
    renderHTML,
    renderKeyboad,
    changeSizeSpecialKeys,

} from './Dom';

import {
    exportArrays
} from './Data';

const importedArrays = exportArrays();

const {
    engKeys,
    rusKeys,
    engKeysUppercase,
    rusKeysUppercase,
    engKeysShift,
    rusKeysShift,
} = importedArrays;

 renderHTML();
 renderKeyboad();
 changeSizeSpecialKeys();
















 let leftShift;
 let caps;

const isEng = localStorage.getItem('isEng');
let output = '';



function keydown(event) {
    if (event.code === 'ShiftLeft') {
        leftShift = true;
    }
    let element = document.querySelectorAll('div[data="' + `${event.keyCode}` + '"]');
    if (element.length === 1) {
        element = element[0];
        element.classList.add('key__active');

        if (element.innerText === 'Backspace') {
            output = output.substr(0, output.length - 1);

        } else if (element.innerText === 'Enter') {
            output += '\n';

        } else if (element.innerText === '') {
            output += ' ';

        } else if (element.innerText === 'Tab') {
            output += '   ';

        } else if (element.innerText === 'Caps Lock') {
            output += '';

        } else {
            output += element.innerText;
        }

        document.querySelector('textarea').value = output;

    } else if (event.code === "ShiftLeft") {
            element[0].classList.add('key__active');

        } else if (event.code === "ShiftRight") {
            element[1].classList.add('key__active');

        } else if (event.code === "ControlLeft") {
            element[0].classList.add('key__active');

        } else if (event.code === "ControlRight") {
            element[1].classList.add('key__active');

        } else if (event.code === "MetaLeft") {
            element[0].classList.add('key__active');

        } else if (event.code === "MetaRight") {
            element[1].classList.add('key__active');

        } else if (event.code === "AltLeft") {
            element[0].classList.add('key__active');

        } else if (event.code === "AltRight") {
            element[1].classList.add('key__active');
        }
    if (event.keyCode === 16) {
        let langKeys;
        isEng == 1 ? langKeys = engKeysShift : langKeys = rusKeysShift;
        let i = 0;
        const keys = document.querySelectorAll('.keyboard__keys-box div');
        keys.forEach((el) => {
            el.innerText = langKeys[i];
            i += 1;
        });
    }
}

document.addEventListener('keydown', (event) => {
    keydown(event);
});


document.addEventListener('keyup', function (event) {
    if (event.code === 'ShiftLeft') {
         leftShift = false;
    }
    else if (event.code == 'AltLeft') {
        if (leftShift) {
            isEng == 1 ? isEng = 0 : isEng = 1;
            let i = 0;
            const keys = document.querySelectorAll('.keyboard__keys-box div');
            let langKeys;
            isEng == 1 ? langKeys = engKeys : langKeys = rusKeys;
            keys.forEach((el) => {
                el.innerText = langKeys[i];
                i += 1;
            });
        }
    }
    let element = document.querySelectorAll('div[data="' + `${event.keyCode}` + '"]');
    if (element.length === 1) {
        element = element[0];
        element.classList.remove('key__active');
        } else if (event.code === "ShiftLeft") {
            element[0].classList.add('key__active');

        } else if (event.code === "ShiftRight") {
            element[1].classList.add('key__active');

        } else if (event.code === "ControlLeft") {
            element[0].classList.add('key__active');

        } else if (event.code === "ControlRight") {
            element[1].classList.add('key__active');

        } else if (event.code === "MetaLeft") {
            element[0].classList.add('key__active');

        } else if (event.code === "MetaRight") {
            element[1].classList.add('key__active');

        } else if (event.code === "AltLeft") {
            element[0].classList.add('key__active');

        } else if (event.code === "AltRight") {
            element[1].classList.add('key__active');
        }
    if (event.keyCode === 20) {
        let langKeys;
        isEng == 1 ? langKeys = engKeysUppercase : langKeys = rusKeysUppercase;
        caps = event.getModifierState && event.getModifierState('CapsLock');
        let i = 0;
        const keys = document.querySelectorAll('.keyboard__keys-box div');
        if (caps) {
            element.classList.add('key__active');
            keys.forEach((el) => {
                el.innerText = langKeys[i];
                i++;
            })
        } else {
            isEng == 1 ? langKeys = engKeys : langKeys = rusKeys;
            element.classList.remove('key__active');
            keys.forEach((el) => {
                el.innerText = langKeys[i];
                i += 1;
            });
        }
    } else if (event.keyCode === 16) {
        let langKeys;
        isEng == 1 ? langKeys = engKeys : langKeys = rusKeys;
        let i = 0;
        const keys = document.querySelectorAll('.keyboard__keys-box div');
        keys.forEach((el) => {
            el.innerText = langKeys[i];
            i += 1;
        });
    }
});








const addClikedHandler = () => {
document.querySelector('.keyboard__keys-box').childNodes.forEach((e) => {
    e.addEventListener('mousedown', (event) => {
        let element = document.querySelectorAll('div[data="' + `${event.target.getAttribute('data')}` + '"]');
        if (element.length === 1) {
            element = element[0];
            element.classList.add('key__active');
        } else {
            element = event.target;
            element.classList.add('key__active');
        }
    });
})
document.querySelector('.keyboard__keys-box').childNodes.forEach((e) => {
    e.addEventListener('mouseup', (event) => {
        let element = document.querySelectorAll('div[data="' + `${event.target.getAttribute('data')}` + '"]');
        if (element.length === 1) {
            // eslint-disable-next-line prefer-destructuring
            element = element[0];
            element.classList.remove('key__active');

            if (element.innerText === 'Backspace') {
                output = output.substr(0, output.length - 1);

            } else if (element.innerText === 'Enter') {
                output += '\n';

            } else if (element.innerText === '') {
                output += ' ';

            } else if (element.innerText === 'Tab') {
                output += '   ';

            } else if (element.innerText === 'Caps Lock') {
                output += '';

            } else {
                output += element.innerText;
            }
            document.querySelector('textarea').value = output;

        } else {
            element = event.target;
            element.classList.remove('key__active');
        }

        const keyCode = event.target.getAttribute('data');
        if (keyCode === 20) {
            caps = !caps;
            let langKeys;
            isEng == 1 ? langKeys = engKeysUppercase : langKeys = rusKeysUppercase;
            let i = 0;
            const keys = document.querySelectorAll('.keyboard__keys-box div');
            if (caps) {
                element.classList.add('key__active');
                keys.forEach((item) => {
                    item.innerText = langKeys[i];
                    i += 1;
                })
            } else {
                isEng == 1 ? langKeys = engKeys : langKeys = rusKeys;
                element.classList.remove('key__active');
                keys.forEach((el) => {
                    el.innerText = langKeys[i];
                    i += 1;
                });
            }
        }
    });
})
}

addClikedHandler();