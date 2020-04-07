import '../css/style.css';
// import '../css/style.scss';
import {
    renderHTML,
    renderKeyboad,
    changeSizeSpecialKeys,
    addColorspecialKeys

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
    addColorspecialKeys()
    
    let output = '';
    let leftShift;
    let capsLock;
    let checklang = Number(localStorage.getItem('checklang'));
    const keysKeyboard = document.querySelectorAll('.keyboard__keys-box div');
 

    const handleKeyDown = (event) => {
    if (event.code === 'ShiftLeft') leftShift = true;
    let templateKey= document.querySelectorAll('div[data="' + `${event.keyCode}` + '"]');
    if (templateKey.length === 1) {
        templateKey = templateKey[0];
        templateKey.classList.add('key__active');

        if (templateKey.innerText === 'Backspace') {
        output = output.substr(0, output.length-1);

        } else if (templateKey.innerText === 'Enter') {
        output += '\n';

        } else if (templateKey.innerText === 'Delete') {
           output += '\n';

        } else if (templateKey.innerText === '') {
        output += ' ';

        } else if (templateKey.innerText === 'Tab') {
        output += '\t';

        } else if (templateKey.innerText === 'Caps Lock') {
        output += '';

        } else {
        output += templateKey.innerText;
        }
        document.querySelector('textarea').value = output;

        } else if (event.code === "ShiftLeft") {
            templateKey[0].classList.add('key__active');
        
        } else if (event.code === "ShiftRight") {
            templateKey[1].classList.add('key__active');
        
        } else if (event.code === "ControlLeft") {
            templateKey[0].classList.add('key__active');
        
        } else if (event.code === "ControlRight") {
            templateKey[1].classList.add('key__active');
        
        } else if (event.code === "MetaLeft") {
            templateKey[0].classList.add('key__active');
        
        } else if (event.code === "AltLeft") {
            templateKey[0].classList.add('key__active');
        
        } else if (event.code === "AltRight") {
            templateKey[1].classList.add('key__active');
            }

    if (event.keyCode === 16) {
        const langKeys = checklang == 1 ? engKeysShift : rusKeysShift;
        let i = 0;
        keysKeyboard.forEach((item) => {
        item.innerText = langKeys[i];
        i += 1;
        });
    }
    }

    document.addEventListener('keydown', (event) => {
        handleKeyDown(event);
    });

    const handleKeyUp = () => {
    document.querySelector('.keyboard__keys-box').childNodes.forEach((e) => {
    e.addEventListener('mousedown', (event) => {
        let templateKey = document.querySelectorAll('div[data="' + `${event.target.getAttribute('data')}` + '"]');
        if (templateKey.length === 1) {
            templateKey = templateKey[0];
            templateKey.classList.add('key__active');
        } else {
            templateKey = event.target;
            templateKey.classList.add('key__active');
        }
    });
    })

    document.querySelector('.keyboard__keys-box').childNodes.forEach((e) => {
    e.addEventListener('mouseup', (event) => {
        let templateKey = document.querySelectorAll('div[data="' + `${event.target.getAttribute('data')}` + '"]');
        if (templateKey.length === 1) {
            templateKey = templateKey[0];
            templateKey.classList.remove('key__active');

        if (templateKey.innerText === 'Backspace') {
            output = output.substr(0, output.length-1);

        } else if (templateKey.innerText === 'Enter') {
            output += '\n';

        } else if (templateKey.innerText === 'Delete') {
             output += '\n';

        } else if (templateKey.innerText === '') {
            output += ' ';

        } else if (templateKey.innerText === 'Tab') {
            output += '\t';

        } else if (templateKey.innerText === 'Caps Lock') {
            output += '';

        } else {
            output += templateKey.innerText;
        }

        document.querySelector('textarea').value = output;

        } else {
            templateKey = event.target;
            templateKey.classList.remove('key__active');
        }

    const keyCode = event.target.getAttribute('data');

    if (keyCode == 20) {
        capsLock = !capsLock;
        let langKeys;
        checklang == 1 ? langKeys = engKeysUppercase : langKeys = rusKeysUppercase;
        let i = 0;
        const keys = document.querySelectorAll('.keyboard__keys-box div');
        if (capsLock) {
            templateKey.classList.add('key__active');
            keys.forEach((el) => {
            el.innerText = langKeys[i];
            i += 1;
          })
        } else {
            checklang == 1 ? langKeys = engKeys : langKeys = rusKeys;
            templateKey.classList.remove('key__active');
            keys.forEach((el) => {
            el.innerText = langKeys[i];
            i += 1;
          });
        }
      }
    });
   });

    document.addEventListener('keyup', (event) => {
    if (event.code === 'ShiftLeft') leftShift = false;
    else if (event.code === 'AltLeft') {
        if (leftShift) {
            checklang == 1 ? checklang = 0 : checklang = 1;
            let i = 0;
            let langKeys;
            checklang == 1 ? langKeys = engKeys : langKeys = rusKeys;
            keysKeyboard.forEach((item) => {
            item.innerText = langKeys[i];
            i += 1;
        });
      }
    }

    let templateKey = document.querySelectorAll('div[data="' + `${event.keyCode}` + '"]');
    if (templateKey.length === 1) {
        templateKey = templateKey[0];
        templateKey.classList.remove('key__active');
    } else if (event.code === "ShiftLeft") {
        templateKey[0].classList.remove('key__active');

        } else if (event.code === "ShiftRight") {
            templateKey[1].classList.remove('key__active');

        } else if (event.code === "ControlLeft") {
            templateKey[0].classList.remove('key__active');

        } else if (event.code === "ControlRight") {
            templateKey[1].classList.remove('key__active');

        } else if (event.code === "MetaLeft") {
            templateKey[0].classList.remove('key__active');

        } else if (event.code === "AltLeft") {
            templateKey[0].classList.remove('key__active');
            
        } else if (event.code === "AltRight") {
            templateKey[1].classList.remove('key__active');
        }

    if (event.keyCode === 20) {
        let langKeys;
        checklang == 1 ? langKeys = rusKeysUppercase : langKeys = engKeysUppercase;
        capsLock = event.getModifierState && event.getModifierState('CapsLock');
        let i = 0;
        if (capsLock) {
            templateKey.classList.add('key__active');
        keysKeyboard.forEach((item) => {
            item.innerText = langKeys[i];
            i += 1;
        })
        } else {
            checklang=== 1 ? langKeys = engKeys : langKeys = rusKeys;
            templateKey.classList.remove('key__active');
            keysKeyboard.forEach((item) => {
            item.innerText = langKeys[i];
            i += 1;
        });
      }
    } else if (event.keyCode === 16) {
                let langKeys;
                checklang == 1 ? langKeys = engKeys : langKeys = rusKeys;
                let i = 0;
                keysKeyboard.forEach((item) => {
                item.innerText = langKeys[i];
            i += 1;
            });
          }
       });
    }

    handleKeyUp();
