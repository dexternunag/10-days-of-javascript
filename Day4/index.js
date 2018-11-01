const counterInput = document.getElementById('counterInput');
const counterButton = document.getElementById('counterButton');
const counter = document.getElementById('counter');

counterButton.addEventListener('click', startCounter);

function startCounter() {
  let count = counterInput.value;
  // Do nothing if input is empty
  if (!count) return;
  // Start
  countDown(count);
}

function countDown(count) {
  // Set to display
  counter.innerText = count;
  // Check if count is 0
  if (count < 1) return;
  // Wait for 1 second to count again
  count--;
  const timer = setTimeout(() => countDown(count), 1000);
}