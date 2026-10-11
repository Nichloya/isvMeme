const linesKeys = [
    ['č', 'ě', 'š', 'ž', 'ć', 'đ'],
    ['ď', 'ľ', 'ń', 'ŕ', 'ś', 'ť'],
    ['å', 'ę', 'è', 'ò', 'ų', 'ź'],
    ['є', 'ы', 'ј', 'љ', 'њ', 'ь']
];

/*
Генерация матрицы больших букв
const linesKeysBig = structuredClone(linesKeys);
for (let line of linesKeysBig.keys()) {
    for (let n of linesKeysBig[line].keys()) {
        linesKeysBig[line][n] = linesKeysBig[line][n].toUpperCase()
    }
}*/

let arraysKbd = [];
var keyboard = document.getElementById("keyboard");

for (step = 0; step < linesKeys.length * 2; step++) {
    const divElement = document.createElement("div");
    divElement.className = `kbdLine`;
    keyboard.appendChild(divElement);
    arraysKbd.push(divElement);
}

for (const line of linesKeys.keys()) {
    for (const key of linesKeys[line].keys()) {
        const keyBtn = document.createElement("button");
        keyBtn.innerHTML = linesKeys[line][key];
        keyBtn.onclick = function () {
            addToTextArea(linesKeys[line][key]);
        };

        const divElement = document.createElement("div");
        divElement.className = "keyGroup";
        // arraysKbdKeys.push(divElement)

        const keyBtnBig = document.createElement("button");
        keyBtnBig.innerHTML = linesKeys[line][key].toUpperCase();
        keyBtnBig.onclick = function () {
            addToTextArea(linesKeys[line][key].toUpperCase())
        };

        arraysKbd[line].style.marginLeft = `${line * 10}px`;

        divElement.appendChild(keyBtnBig);
        divElement.appendChild(keyBtn);

        arraysKbd[line].appendChild(divElement);
    }
}

// https://codepen.io/Fantantonio/pen/oNdreeB
const addToTextArea = function (text_to_add) {
    let start_position = inputText.selectionStart;
    let end_position = inputText.selectionEnd;

    inputText.value = `${inputText.value.substring(
        0,
        start_position
    )}${text_to_add}${inputText.value.substring(
        end_position,
        inputText.value.length
    )}`;
    inputText.focus();

// опа
let new_cursor_position = start_position + text_to_add.length;
    inputText.selectionStart = new_cursor_position;
    inputText.selectionEnd = new_cursor_position;
    drawMeme()
};


// Source - https://stackoverflow.com/a/34278578
// Posted by Jayant Bhawal, modified by community. See post 'Timeline' for change history
// Retrieved 2026-07-15, License - CC BY-SA 4.0


// function createKbd(array, div, even) {
//
//     for (const letterCycle of array) {
//         const keyBtn = document.createElement("button");
//         keyBtn.innerHTML = (letterCycle);
//         keyBtn.onclick = function() {
//             inputText.value += letterCycle;
//         };
//         arraysKbd[(div * 2) + even].classList.add(even == 0)
//         arraysKbd[(div * 2) + even].appendChild(keyBtn);
//     }
//
//
//
// }



// for (line = 0; line < linesKeys.length ; line++) {
//     for (letter = 0; letter < dimensionKeys[0][0][line].length; letter++) {
//         for (letterCase = 0; letterCase < 2; letterCase++) {
//             const keyBtn = document.createElement("button");
//             keyBtn.innerHTML = (dimensionKeys[letterCase][letter][line]);
//             keyBtn.onclick = function() {
//                 inputText.value += dimensionKeys[letterCase][letter][line];
//             };
//             arraysKbd[letter].appendChild(keyBtn);
//         }
//     }
// }






// // Это фигня какая-то, но вроде работает
//
// function createKbd(array, div) {
//
//
//
//
//     for (const letterCycle of array) {
//         const keyBtn = document.createElement("button");
//         keyBtn.innerHTML = (letterCycle);
//         keyBtn.onclick = function() {
//             inputText.value += letterCycle;
//             };
//         arraysKbd[div].appendChild(keyBtn);
//
//
//         }
//
//
//
//     }
//
// for (const key of linesKeys.keys()) {
//         createKbd(linesKeys[key], key)
//
//     }
