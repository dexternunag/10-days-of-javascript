const item = document.querySelector('.item');
const boxes = document.querySelectorAll('.box');

// Item event listener
item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

// Boxes  event listener
for (const box of boxes) {
  box.addEventListener('dragover', dragOver);
  box.addEventListener('dragenter', dragEnter);
  box.addEventListener('dragleave', dragLeave);
  box.addEventListener('drop', dragDrop);
}

// Drag functions
function dragStart() {
  this.className += ' hold';
  setTimeout(() => this.className = 'd-none', 0);
}

function dragEnd() {
  this.className = 'item';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  setTimeout(() => this.className = 'box', 0);
}

function dragDrop() {
  this.className = 'box';
  this.append(item);
}