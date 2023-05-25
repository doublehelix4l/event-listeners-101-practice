// You now have a 3x3 grid. We want to configure this grid such that when the left 3 cells are clicked, the colors turn red, when the middle 3 cells are clicked, the color turns green, and when the last 3 cells are clicked, the color turns blue. 

// Write some JS code below such that event listeners are attached to all the correct elements following the specifications above.

// Hint: Some sort of loop may be helpful to you in this process!


const left1 = document.getElementsByClassName("grid-cell green")[0]
const left2 = document.getElementsByClassName("grid-cell green")[1]
const left3 = document.getElementsByClassName("grid-cell green")[2]

const middle1 = document.getElementsByClassName("grid-cell red")[0]
const middle2 = document.getElementsByClassName("grid-cell red")[1]
const middle3 = document.getElementsByClassName("grid-cell red")[2]

const right1 = document.getElementsByClassName("grid-cell blue")[0]
const right2 = document.getElementsByClassName("grid-cell blue")[1]
const right3 = document.getElementsByClassName("grid-cell blue")[2]

//left1.addEventListener("click", gridFun("green", [left1, left2, left3]))

// function gridFun(color, grid){
//     for (let i=0; i<grid.length; i++){
//         let currentItem = grid[i]
//         currentItem.style.backgroundColor = color
//     }
// }

left1.addEventListener("click", function () {
    left1.style.backgroundColor = "green";
    left2.style.backgroundColor = "green";
    left3.style.backgroundColor = "green";
});

left2.addEventListener("click", function () {
    left1.style.backgroundColor = "green";
    left2.style.backgroundColor = "green";
    left3.style.backgroundColor = "green";
});

left3.addEventListener("click", function () {
    left1.style.backgroundColor = "green";
    left2.style.backgroundColor = "green";
    left3.style.backgroundColor = "green";
});

right1.addEventListener("click", function () {
    right1.style.backgroundColor = "blue";
    right2.style.backgroundColor = "blue";
    right3.style.backgroundColor = "blue";
});

right2.addEventListener("click", function () {
    right1.style.backgroundColor = "blue";
    right2.style.backgroundColor = "blue";
    right3.style.backgroundColor = "blue";
});

right3.addEventListener("click", function () {
    right1.style.backgroundColor = "blue";
    right2.style.backgroundColor = "blue";
    right3.style.backgroundColor = "blue";
});


middle1.addEventListener("click", function () {
    middle1.style.backgroundColor = "red"
    middle2.style.backgroundColor = "red"
    middle3.style.backgroundColor = "red"
});

middle2.addEventListener("click", function () {
    middle1.style.backgroundColor = "red"
    middle2.style.backgroundColor = "red"
    middle3.style.backgroundColor = "red"
});

middle3.addEventListener("click", function () {
    middle1.style.backgroundColor = "red"
    middle2.style.backgroundColor = "red"
    middle3.style.backgroundColor = "red"
});