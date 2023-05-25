// Let's also practice the different type of button press type of user events that can occur. 

// First, we'll do the regular click event. On the #circle-one element, set an event listener that when you click it, will turn its background color blue.

// Next, we'll do the event when any key is pressed on the keyboard. On the #circle-two element, set an event listener that when you press any key on the keyboard, will turn its background color green.

// Lastly, we'll do the event when the user releases a key on the keyboard. On the #circle-three element, set an event listener that when you release any key on the keyboard, will turn its background color red. 

let circle1 = document.getElementById("circle-one")
let circle3 = document.getElementById("circle-three")

circle1.addEventListener("click", function(){
    circle1.style.background = "blue"
});
document.addEventListener("keypress", function(){
    circle3.style.background = "red"
});

