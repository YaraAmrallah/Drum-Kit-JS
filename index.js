// document.querySelector("button").addEventListener("click", function () {
//   alert("I was clicked!");
// });

var drumButtons = document.querySelectorAll(".drum");
var drumButtonsLength = drumButtons.length;

for (var i = 0; i < drumButtonsLength; i++) {
  drumButtons[i].addEventListener("click", function() {
    var x = this.textContent;
    makeSound(x);
  });
}

document.addEventListener("keypress", function(event) {
  x = event.key;
  makeSound(x);
});


function makeSound(x) {
  var sounds = ["tom-1", "tom-2", "tom-3", "tom-4", "crash", "kick-bass", "snare"];
  var j;
  switch (x) {
    case 'w':
      j = 0;
      break;

    case 'a':
      j = 1;
      break;

    case 's':
      j = 2;
      break;

    case 'd':
      j = 3;
      break;

    case 'j':
      j = 4;
      break;

    case 'k':
      j = 5;
      break;

    case 'l':
      j = 6;
      break;

    default:
      console.log(x);
  }
  var audioName = "sounds/" + sounds[j] + ".mp3";
  var audio = new Audio(audioName);
  audio.play();
}
