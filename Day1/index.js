const todoList = new Array();
// Set elements as variables
const addButton = document.getElementById('addButton');
const textInput = document.getElementById('textInput');
const tableBody = document.querySelector('tbody');

// Attach events to the selected elements
addButton.addEventListener('click', create)

document.addEventListener('click', (e) => {
  const clickedElement = e.target.id;
  if (clickedElement === 'deleteButton') return del(e);
});

// CRUD Functionalities
function create() {
  const newTodo = textInput.value;
  
  if (!newTodo || doExists(newTodo)) return invalidAlert(doExists(newTodo));
  
  todoList.push(newTodo);

  textInput.value = '';

  read(newTodo);
}

function read(newTodo) {
  tableBody.appendChild(createNewTableRow(newTodo, todoList.indexOf(newTodo)));
}

function del(el) {
  const index = el.target.getAttribute('data-id');
  const selectedElem = document.querySelectorAll(`.todo-item`);

  selectedElem.forEach(item => item.remove());
  todoList.splice(index - 1, 1);

  todoList.forEach((todo, i) => read(todo));
}

// Etc
function createNewTableRow(todo, index) {
  const newTableRow = document.createElement('tr');
  const cellElementOne = newTableRow.insertCell(0);
  const cellElementTwo = newTableRow.insertCell(1);
  const cellElementThree = newTableRow.insertCell(2);

  const deleteButton = createTableRowActionButton(index);

  cellElementOne.innerText = index + 1;
  cellElementTwo.innerText = todo;
  cellElementThree.appendChild(deleteButton);

  newTableRow.classList = 'todo-item';
  newTableRow.setAttribute('data-id', index + 1);

  return newTableRow;
}

function createTableRowActionButton(index) {
  const deleteButton = document.createElement('button');

  deleteButton.id = 'deleteButton';
  deleteButton.setAttribute('data-id', index + 1);
  deleteButton.classList = 'btn btn-danger';
  deleteButton.innerText = 'Delete';

  return deleteButton;
}

function invalidAlert(exists) {
  const invalidLabel = document.createElement('div');
  invalidLabel.classList = 'invalid-feedback';
  invalidLabel.innerText = exists ? 'Todo already exists! Try a new one!' : 'Put something to do!';

  textInput.classList = 'form-control is-invalid'
  textInput.insertAdjacentElement('afterEnd', invalidLabel);

  setTimeout(() => removeInvalidAlert(), 1500);
}

function removeInvalidAlert() {
  textInput.classList = 'form-control'
  const invalidLabel = document.querySelector('.invalid-feedback');
  invalidLabel.parentNode.removeChild(invalidLabel);
}

function doExists(newTodo) {
  return todoList.indexOf(newTodo) >= 0;
}