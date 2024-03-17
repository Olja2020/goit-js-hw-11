// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';

const button = document.querySelector('button');
const inputSearch = document.querySelector('.search');
const imagesGallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

const gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

const submitSearchImages = form.addEventListener('submit', function (e) {
  e.preventDefault();

  loader.style.display = 'flex';
  imagesGallery.innerHTML = '';
  // fetchImages();
  try {
    fetchImages();
  } catch (error) {
    iziToast.error({
      color: 'red',
      message: `:x: Sorry, there was a mistake. Please try again!`,
      position: 'topRight',
    });
  } finally {
    loader.style.display = 'none';
  }

  form.reset();
});

//   }// ______________________________;
// mport iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { OrbitSpinner } from 'epic-spinners';
// import { renderImgs } from './js/render-functions';
// import { fetchImg } from './js/pixabay-api';
// export const setGallery = document.querySelector('ul.gallery');
// export let url;
// const inputfield = document.querySelector('input');
// const inputBtn = document.querySelector('button');
// const fillForm = document.querySelector('form');
// let wishImgs;
// const preloader = document.querySelector('.preloader');
// // +++++++++++++++++++
// const showLoader = () => {
//   preloader.style.display = 'flex';
// };
// const hideLoader = () => {
//   preloader.style.display = 'none';
// };
// const handleLoad = () => {
//   document.body.classList.add('loaded');
//   document.body.classList.remove('loaded_hiding');
// };
// // +++++++++++++++++++
// inputBtn.addEventListener('click', async (event) => {
//   event.preventDefault();
//   wishImgs = inputfield.value.trim();
//   if (!wishImgs.length) {
//     iziToast.error({
//       color: 'yellow',
//       message: ` Please fill in the field for the search query.`,
//       position: 'topRight',
//     });
//     setGallery.innerHTML = '';
//     return;
//   }
//   const searchParams = new URLSearchParams({
//     key: '22926721-5d20aa08498ffd1ff2f906542',
//     q: wishImgs,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//   });
//   url = `https://pixabay.com/api/?${searchParams}`;
//   showLoader();
//   try {
//     const images = await fetchImg();
//     renderImgs(images);
//   } catch (error) {
//     iziToast.error({
//       color: 'red',
//       message: `:x: Sorry, there was a mistake. Please try again!`,
//       position: 'topRight',
//     });
//   } finally {
//     hideLoader();
//     handleLoad();
//   }
// });
// window.onload = handleLoad;
