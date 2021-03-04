const root = document.documentElement;

const image = document.querySelector('.img__container');
const picButton = document.querySelector('#new-pic');
const colorPicker = document.querySelector('#color-picker');
const blendMode = document.querySelector('#blend-mode');

// function to fetch photos from the endpoint
const fetchPhoto = () => {
  const url = 'https://picsum.photos/800?grayscale';
  const spinner = document.querySelector('.img__spinner');

  image.style.backgroundImage = `url('./images/spinner.svg')`;

  fetch(url)
    .then((response) => response.blob())
    .then((data) => {
      const imgURL = URL.createObjectURL(data);
      image.style.backgroundImage = `url('${imgURL}')`;
      spinner.src = '';
    });
};

fetchPhoto();

// resets root variable to transparent
const resetRoot = () => {
  root.style.setProperty('--color', 'transparent');
};

picButton.addEventListener('click', () => {
  fetchPhoto();
  resetRoot();
});

// sets root values to input selections
colorPicker.oninput = () =>
  root.style.setProperty('--color', colorPicker.value);

blendMode.oninput = () =>
  root.style.setProperty('--blend-mode', blendMode.value);
