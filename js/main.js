const image = document.querySelector('#image');
const button = document.querySelector('#new-pic');
const url = 'https://picsum.photos/800/600?grayscale';

// funciton to fetch photos from the endpoint
const fetchPhoto = () => {
  fetch(url)
    .then((response) => response.blob())
    .then((data) => {
      const imgURL = URL.createObjectURL(data);
      image.src = imgURL;
    });
};

fetchPhoto();

button.addEventListener('click', fetchPhoto);
