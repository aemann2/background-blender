const image = document.querySelector('.img-container');
const bwButton = document.querySelector('#new-BW-pic');
const colorButton = document.querySelector('#new-color-pic');
const bwUrl = 'https://picsum.photos/800/600?grayscale';
const colorUrl = 'https://picsum.photos/800/600';

const colorPicker = document.querySelector('#colorpicker');
const root = document.documentElement;
const blendMode = document.querySelector('#blend-mode');

// function to fetch photos from the endpoint
const fetchBWPhoto = () => {
  fetch(bwUrl)
    .then((response) => response.blob())
    .then((data) => {
      const imgURL = URL.createObjectURL(data);
      image.style.backgroundImage = `url('${imgURL}')`;
    });
};

const fetchColorPhoto = () => {
  fetch(colorUrl)
    .then((response) => response.blob())
    .then((data) => {
      const imgURL = URL.createObjectURL(data);
      image.style.backgroundImage = `url('${imgURL}')`;
    });
};

// resets root to transparent
const resetRoot = () => {
  root.style.setProperty('--color', 'transparent');
};

fetchBWPhoto();

bwButton.addEventListener('click', () => {
  fetchBWPhoto();
  resetRoot();
});

colorButton.addEventListener('click', () => {
  fetchColorPhoto();
  resetRoot();
});

colorPicker.oninput = () =>
  root.style.setProperty('--color', colorPicker.value);

blendMode.oninput = () =>
  root.style.setProperty('--blend-mode', blendMode.value);
