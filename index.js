let objs = document.querySelectorAll('.drum');

for (let i = 0; i < objs.length; i++) {
  objs[i].addEventListener('click', function () {
    makeSound(this.innerHTML);

    buttonAnimation(this.innerHTML);

    /* let audio = new Audio('tom1.mp3');
    audio.play(); */

  });

}

document.addEventListener('keypress', function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(ourButton) {
  let audio;

  switch (ourButton) {
    case 'w':
      audio = new Audio('sounds/tom3.mp3');
      audio.play();
      break;

    case 'a':
      audio = new Audio('sounds/kick.mp3');
      audio.play();
      break;

    case 's':
      audio = new Audio('sounds/tom2.mp3');
      audio.play();
      break;

    case 'd':
      audio = new Audio('sounds/tom1.mp3');
      audio.play();
      break;

    case 'j':
      audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    case 'k':
      audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case 'l':
      audio = new Audio('sounds/tom4.mp3');
      audio.play();
      break;

    default: console.log("Something wrong!");
  }
}

function buttonAnimation(key) {
  let activeButton = document.querySelector('.' + key);
  if (activeButton != null) {
    activeButton.classList.add('pressed');

    setTimeout(function () {
      activeButton.classList.remove('pressed');
    }, 100);
  }


}