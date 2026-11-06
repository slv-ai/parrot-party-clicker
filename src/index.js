// Add javascript code to Party Parrot Clicker such that:

// 1. A click on the Party Parrot increases the counter by 1
// 2. Add a button called ‘reset’ that will reset the
//    click count to ‘0’.
// 3. Add an effect whenever the clickCount
//    reaches a specific number.
//    (Ex: make parrot bigger, smaller, change the text/emoji,
//    etc.)
const state = {
    clickCount : 0,
    clicked : false
}

const updateClickCount = () => {
    const parrotCountContainer = document.getElementById('parrot-count');
    state.clickCount += 1;
    parrotCountContainer.textContent = state.clickCount;

    const parrot = document.querySelector('#parrot');
    if (state.clickCount >= 10 ){
        parrot.classList.add('large');
    }
};

const resetClickButton = () => {
    const parrotCountContainer = document.getElementById('parrot-count');
    state.clickCount = 0;
    parrotCountContainer.textContent = state.clickCount;

    const parrot = document.querySelector('#parrot');
    parrot.classList.remove('large');
}

// Box 1: When the mouse hovers over Box 1, switch the background to pink
const mouseOverEffect = () => {
    const boxOne = document.getElementById('box-one');
    boxOne.classList.add('overbox');
    console.log('mouseover box1');
};
const mouseLeaveEffect = () => {
    const boxOne = document.getElementById('box-one');
    boxOne.classList.remove('overbox');
    console.log('mouseover box1');
};
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
const changeTextToEmoji = (event) => {
    const boxTwo = document.getElementById('box-two');
    if (event.code == 'Space'){
        boxTwo.querySelector('p').textContent = '🍮';
    }
};
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
const clickedOn = () => {
    const boxThree = document.getElementById("box-three");
    if (!state.clicked){
        boxThree.classList.add('clicked');
        state.clicked = true;
    } else {
        boxThree.classList.remove('clicked');
        state.clicked = false;
    }
};
// Box 4: When Box 4 is double clicked, an alert shows up
const doubleClick = () => {
    alert('clicked double');
};
// register all Events
const registerEventHandlers = () => {
    const parrot = document.getElementById("parrot");
    parrot.addEventListener("click",updateClickCount);

    const reset = document.getElementById("reset-button");
    reset.addEventListener("click",resetClickButton)

    const boxOne = document.getElementById('box-one');
    boxOne.addEventListener('mouseover', mouseOverEffect);
    boxOne.addEventListener('mouseleave', mouseLeaveEffect);

    document.addEventListener('keydown', changeTextToEmoji);
    
    const boxThree = document.querySelector('#box-three');
    boxThree.addEventListener('click',clickedOn);

    const boxFour = document.querySelector('#box-four');
    boxFour.addEventListener('dblclick',doubleClick);
    
}

document.addEventListener('DOMContentLoaded',registerEventHandlers);



