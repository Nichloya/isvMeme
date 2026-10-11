// КНОПОЧКИ!!!
//
const linesKeys = [
    ['č', 'ě', 'š', 'ž', 'ć', 'đ'],
    ['ď', 'ľ', 'ń', 'ŕ', 'ś', 'ť', 'ź'],
    ['å', 'ę', 'è', 'ò', 'ų'],
    ['є', 'ы', 'ј', 'љ', 'њ', 'ь']
];

const linesKeysBig = structuredClone(linesKeys);
for (let line of linesKeysBig.keys()) {
    for (let n of linesKeysBig[line].keys()) {
        linesKeysBig[line][n] = linesKeysBig[line][n].toUpperCase()
    }
}

// const dimensionKbd = [linesKeys, linesKeysBig]

let arraysKbd = [ ]
var keyboard = document.getElementById("keyboard")

for (step = 0; step < (linesKeys.length * 2); step++) {
    const divElement = document.createElement('div');
    divElement.id = `Ar${step}`
    keyboard.appendChild(divElement);
    arraysKbd.push(divElement)
}


// Это фигня какая-то, но вроде работает

function createKbd(array, div, even) {


    for (const letterCycle of array) {
        const keyBtn = document.createElement("button");
        keyBtn.innerHTML = (letterCycle);
        keyBtn.onclick = function() {
            inputText.value += letterCycle;
            };
        arraysKbd[(div * 2) + even].classList.add(even == 0)
        arraysKbd[(div * 2) + even].appendChild(keyBtn);
        }



    }

for (const key of linesKeys.keys()) {
        createKbd(linesKeys[key], key, 0)
        createKbd(linesKeysBig[key], key, 1)

    }
