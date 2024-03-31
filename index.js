// for(let i = 0; i < 8; i++){
//     document.querySelectorAll('button')[i].addEventListener('click', function () {
//       alert('I got clicked');
//     });
// }

//Whenever, we are selecting the class or id through querySelector or querySelectorAll, then we should use . for class and # for id
//This variable counts the total no. of elements with drum class
var numOfDrumButtons = document.querySelectorAll('.drum').length;
//Detecting button press
for (var i = 0; i < numOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    //Taking out the button textContent into a variable
    var button = this.textContent;
    playSound(button);
    buttonAnimation(button);
  });
}

// Detecting keyboard press
document.addEventListener('keypress', function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

//Detecting button clicks

function playSound(button){
    switch (button) {
        case 'w':
            //Creating audio object assigning into a variable and then calling the play function
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'a':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case 's':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'd':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'j':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'k':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'l':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
       
        default:
            console.log(button.textContent);
            break;
       }
}

function buttonAnimation(currentKey){
        var activeBtn = document.querySelector("."+currentKey);
        activeBtn.classList.add("pressed");

        //Now we have to remove this effect as well after a few sec after the key got pressed
        //Hence, using Timeout function(function, delay)
        setTimeout(() => {
            activeBtn.classList.remove('pressed');
        }, 100);
}