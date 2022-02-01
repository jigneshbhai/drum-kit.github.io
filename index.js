var numOfDrumButtons = document.querySelectorAll(".drum").length;

//select all buttons using loop
//this for mouse
for (var i = 0; i < numOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        //using object excess var of var
        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);

    });
}

//this for keybord press
document.addEventListener("keypress",function(event){

    //we target object of function
        makeSound(event.key);

        buttonAnimation(event.key);
})

function makeSound(key){

    switch (key) {
        case "w":

            //using Audio object and methode create sound
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();

            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();

            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();

            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();

            break;

        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();

            break;

        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();

            break;

        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();

            break;

        default: console.log(buttonInnerHtml);
    }
}

function buttonAnimation(curruntkey){

    var activeButton = document.querySelector("." + curruntkey)//select class of button

    //add animation when button pressed
    activeButton.classList.add("pressed");

    //remove animation after click
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);

}