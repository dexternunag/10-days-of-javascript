window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function from running all together

  audio.currentTime = 0; // rewind to the start
  audio.play();

  key.classList.add('active');
});

const keys = document.querySelectorAll('.key');

function removeClass(e) {
  if (e.propertyName !== 'transform') return; // skip if it's not transform
  this.classList.remove('active');
}

keys.forEach(key => key.addEventListener('transitionend', removeClass))