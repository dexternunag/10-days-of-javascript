const canvas = document.querySelector('#paper');
const ctx = canvas.getContext('2d');
const colors = document.querySelectorAll('.color');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#555555';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 4;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return; // Stop the fn if it's not mouse down
  
  // Start drawing
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

// Select color
colors.forEach(color => color.addEventListener('click', selectColor));

function selectColor(e) {
  const selectedColor = e.target.getAttribute('data-value');
  // Unselect previous selected
  colors.forEach(color => color.classList.remove('color--selected')); 
  
  this.classList.add('color--selected');
  ctx.strokeStyle = selectedColor;
}
