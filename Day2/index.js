// Cat api that gives a random cat :3
const catApi = 'https://api.thecatapi.com/v1/images/search';

const catButton = document.getElementById('catButton');
const catImageHolder = document.getElementById('catImage')

catButton.addEventListener('click', giveMeACat);

// Meow...
function giveMeACat() {
  animateCatButton();
  // Use fetch to get data from the api
  fetch(catApi)
    .then(res => res.json())
    .then(data => displayCat(data[0].url));
}

// Meow.. meow..
function displayCat(url) {
  console.log(url)
  const imgElement = document.createElement('img');
  imgElement.src = url;
  imgElement.id = 'randomCatImage'

  toggleDisplays();
  catImageHolder.appendChild(imgElement);
}

function toggleDisplays() {
  // Hide cat button
  catButton.setAttribute('hidden', true);
  setTimeout(() => {
    // Remove image after and then display cat button again
    catImageHolder.removeChild(document.getElementById('randomCatImage'));
    catButton.removeAttribute('hidden');
  }, 5000);
}

// meeeooow...
function animateCatButton() {
  catButton.classList = 'btn-cat--small';
  setTimeout(() => catButton.classList = 'btn-cat', 150);
}