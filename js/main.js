const image = document.querySelector('.img__container');
const spinner = document.querySelector('.img__spinner');
const bwButton = document.querySelector('#new-BW-pic');
const bwUrl = 'https://picsum.photos/800?grayscale';

const colorPicker = document.querySelector('#color-picker');
const root = document.documentElement;
const blendMode = document.querySelector('#blend-mode');

// function to fetch photos from the endpoint
const fetchBWPhoto = () => {
  image.style.backgroundImage = `url('./images/spinner.svg')`;
  fetch(bwUrl)
    .then((response) => response.blob())
    .then((data) => {
      const imgURL = URL.createObjectURL(data);
      image.style.backgroundImage = `url('${imgURL}')`;
      spinner.src = '';
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

colorPicker.oninput = () =>
  root.style.setProperty('--color', colorPicker.value);

blendMode.oninput = () =>
  root.style.setProperty('--blend-mode', blendMode.value);
