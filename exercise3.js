// Something that's important to be aware of is that you can set multiple event listeners on the same element. We'll practice that in this exercise.

// First, we have the #cell-one element. We will give two event listeners to this element:
    // 1) An event listener that, when the element is clicked, will turn the background color to green.
    // 2) An event listener that, when the element is double-clicked, will turn the background color to blue. 

// Next, we'll target the #cell-two element. We will give two event listeners to this element:
    // 1) An event listener that, when the element is hovered over, will turn the border into a green, 2px width, and solidly-lined border. 
    // 2) An event listener that, when the user removes their mouse from over the element, will turn the border back into a black, 2 px width, and solidly-lined border.  

// Lastly, we'll target the #cell-three element. We will give two event listeners to this element:
    // 1) An event listener that, when the element is clicked, will fill the element with a text of "Stop clicking me!"
    // 2) An event listener that, when the element is right-clicked, will fill the element with a text of "No right clicking either!!"

    let cell1 = document.getElementById("cell-one")

cell1.addEventListener("click", function(){
    cell1.style.background = "green"
});
cell1.addEventListener("dblclick", function(){
    cell1.style.background = "blue"
});

let cell2 = document.getElementById("cell-two")

cell2.addEventListener("mouseover", function(){
    cell2.style.borderColor = "green"
    cell2.style.borderWidth = "2px 2px 2xp 2xp";
});

cell2.addEventListener("mouseleave", function(){
    cell2.style.borderColor = "black"
    cell2.style.borderWidth = "2px 2px 2xp 2xp";
});

let cell3 = document.getElementById("cell-three")

cell3.addEventListener("click", function(){
    cell3.innerText = "Stop clicking me!"
});

cell3.addEventListener("contextmenu", function(){
    cell3.innerText = "No right clicking either!!"
});