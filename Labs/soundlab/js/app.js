var soundButtons = document.getElementById('soundButtons');

var sounds = [
  'chimes_long.mp3',
  'click_clock_loop.mp3',
  'pop_10.mp3',
  'puff.mp3'
];

var soundElements = [];

sounds.forEach((soundURL, idx) => {
  var newSound = new Audio('sounds/' + soundURL);

  soundElements.push(newSound);

  var newButton = document.createElement('button');
  newButton.innerHTML = soundURL;

  newButton.setAttribute('data-sound-id', idx);

  soundButtons.appendChild(newButton);

  newButton.addEventListener('click', playSoundInArray);
});

function playSoundInArray(event) {
  var soundIndex = Number(event.target.getAttribute('data-sound-id'));

  var selectedSound = soundElements[soundIndex];

  selectedSound.play();
}
