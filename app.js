const colorOne = document.querySelector('#color-1');
const colorTwo = document.querySelector('#color-2');
const colorThree = document.querySelector('#color-3');
const colorFour = document.querySelector('#color-4');
const colorFive = document.querySelector('#color-5');
const colorSix = document.querySelector('#color-6');

const oR = document.querySelector('#oR');
const oG = document.querySelector('#oG');
const oB = document.querySelector('#oB');

const oR2 = document.querySelector('#oR2');
const oG2 = document.querySelector('#oG2');
const oB2 = document.querySelector('#oB2');

const oR3 = document.querySelector('#oR3');
const oG3 = document.querySelector('#oG3');
const oB3 = document.querySelector('#oB3');

const oR4 = document.querySelector('#oR4');
const oG4 = document.querySelector('#oG4');
const oB4 = document.querySelector('#oB4');

const oR5 = document.querySelector('#oR5');
const oG5 = document.querySelector('#oG5');
const oB5 = document.querySelector('#oB5');

const oR6 = document.querySelector('#oR6');
const oG6 = document.querySelector('#oG6');
const oB6 = document.querySelector('#oB6');

const p = document.querySelectorAll('p');

//Event to change colors
document.addEventListener('keyup', e => {
    if(e.code === 'Space'){
        colorOneColor();
        colorTwoColor();
        colorThreeColor();
        colorFourColor();
        colorFiveColor();
        colorSixColor();
    }
})

//copy event listener
p.addEventListener('click', () => {
    p.copy
})

function colorOneColor(){
    const coR = Math.round(Math.random() * 225);
    const coG = Math.round(Math.random() * 225);
    const coB = Math.round(Math.random() * 225);

    colorOne.style.background = `rgba(${coR}, ${coG}, ${coB})`;
    console.log(coR);
    console.log(coG);
    console.log(coB);

    oR.textContent = `${coR}`;
    oG.textContent = `${coG}`;
    oB.textContent = `${coB}`;
}

function colorTwoColor(){
    const coR = Math.round(Math.random() * 225);
    const coG = Math.round(Math.random() * 225);
    const coB = Math.round(Math.random() * 225);
    colorTwo.style.background = `rgba(${coR}, ${coG}, ${coB})`;

    oR2.textContent = `${coR}`;
    oG2.textContent = `${coG}`;
    oB2.textContent = `${coB}`;
}

function colorThreeColor(){
    const coR = Math.round(Math.random() * 225);
    const coG = Math.round(Math.random() * 225);
    const coB = Math.round(Math.random() * 225);
    colorThree.style.background = `rgba(${coR}, ${coG}, ${coB})`;

    oR3.textContent = `${coR}`;
    oG3.textContent = `${coG}`;
    oB3.textContent = `${coB}`;
}

function colorFourColor(){
    const coR = Math.round(Math.random() * 225);
    const coG = Math.round(Math.random() * 225);
    const coB = Math.round(Math.random() * 225);
    colorFour.style.background = `rgba(${coR}, ${coG}, ${coB})`;

    oR4.textContent = `${coR}`;
    oG4.textContent = `${coG}`;
    oB4.textContent = `${coB}`;
}

function colorFiveColor(){
    const coR = Math.round(Math.random() * 225);
    const coG = Math.round(Math.random() * 225);
    const coB = Math.round(Math.random() * 225);
    colorFive.style.background = `rgba(${coR}, ${coG}, ${coB})`;

    oR5.textContent = `${coR}`;
    oG5.textContent = `${coG}`;
    oB5.textContent = `${coB}`;
}

function colorSixColor(){
    const coR = Math.round(Math.random() * 225);
    const coG = Math.round(Math.random() * 225);
    const coB = Math.round(Math.random() * 225);
    colorSix.style.background = `rgba(${coR}, ${coG}, ${coB})`;

    oR6.textContent = `${coR}`;
    oG6.textContent = `${coG}`;
    oB6.textContent = `${coB}`;
}