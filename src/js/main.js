import { fetchBreeds, fetchCatByBreed } from './cat-api';

const catList = document.querySelector('.cat-list');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const description = document.querySelector('.description');

fetchBreeds()
.then(({ data}) => {
  let allCats = '';
  for (const i of data) {
    allCats += `<option value="${i.id}">${i.name}</option>`;
  }
  catList.innerHTML = allCats;
  loadStyleEnd();
  catList.classList.remove('hidden');
})
.catch(errorStyle);

catList?.addEventListener('change', e => {
  loadStyleStart();
  fetchCatByBreed(e.target.value)
  .then(({ data }) => {
    const cat = data[0].breeds[0]
    description.innerHTML = `
      <div class="image-box">
        <img src="${data[0].url}" alt="${cat.name}" />
      </div>
      <div>
        <h1>${cat.name}</h1>
        <p class="description">${cat.description}</p>
        <div class="temperament-box">
          <p class="temperament-title">Temperament: </p>
          <p>${cat.temperament}</p>
        </div>
      </div>
    `;
    loadStyleEnd();
  })
  .catch(errorStyle);
});

function loadStyleStart() {
  description.classList.add('hidden');
  description.innerHTML = '';
  loader.classList.remove('hidden');
}

function loadStyleEnd() {
  loader.classList.add('hidden');
  description.classList.remove('hidden');
}

function errorStyle(currentError) {
  console.log(currentError);
  error.classList.remove('hidden');
  loader.classList.add('hidden');
  catList.classList.add('hidden');
}