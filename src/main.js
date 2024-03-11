// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const button = document.querySelector("button");
const inputSearch = document.querySelector(".search");
const imagesGallery = document.querySelector(".gallery");
const form = document.querySelector('.form')

// const submitSearchImages = form.addEventListener("submit", function(e){
  
//   e.preventDefault();
  
//   fetchImages()
//     //  .then((images) => renderImages(images))
//     //  .catch((error) => console.log(error));
// });

// function fetchImages() {
 
//   let inputSearchValue = inputSearch.value;
//   const url = `https://pixabay.com/api/?key=42766573-a347fa67a5b7233d1286bfaa7&q=${inputSearchValue}&image_type=photo&orientation=horizontal&safesearch=true`;
// if(inputSearchValue){
//  return fetch(url)
//  .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//         iziToast.error ({
//           title: "",
//           message: "Sorry, there are no images matching your search query. Please try again!",
//         });
//       }
//       return response.json();
//     }) 
//   .then(data => {
//     const imagesData = {
//       totalHits: data.totalHits, // Загальна кількість зображень, які задовольнили запит
//       total: data.total, // Загальна кількість зображень у відповіді
//       images: data.hits // Масив інформації зображень, які задовольнили критерії
//     };
    
//     //renderUsers(data); 
//     function renderUsers(data) {
//       const markup = images
//         .map((image) => {
//           return 
//           `<a class="gallery-link" href="${image.largeImageURL}">
      
//           <img
    
//              class="gallery-image"
    
//              src="${image.webformatURL}"
    
//              alt="${image.tags}"
    
//            />
    
//          </a>
//         <ul>
//          <li>Likes<span>"${image.likes}" </span></li>
//          <li>Views<span>"${image.views}" </span></li>
//          <li>Comments<span>"${image.comments}" </span></li>
//          <li>Downloads<span>"${image.downloads}" </span></li>
//          </ul>`;
          
//         })
//         .join("");
//       imagesGallery.insertAdjacentHTML("beforeend", markup);
//       }
    
    
//   })
//   .catch(error => {
//     console.log(error); // Обробка помилок
  
//   });
// }
// }


const submitSearchImages = form.addEventListener("submit", function(e){
  e.preventDefault();
  fetchImages();
});

function fetchImages() {
  let inputSearchValue = inputSearch.value;
  const url = `https://pixabay.com/api/?key=42766573-a347fa67a5b7233d1286bfaa7&q=${inputSearchValue}&image_type=photo&orientation=horizontal&safesearch=true`;

  if (inputSearchValue) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      }) 
      
        .then(data => {
          if (data.hits.length === 0) {
              iziToast.error({
                  title: "",
                  message: "Sorry, there are no images matching your search query. Please try again!",
              });
          } else {
            
              const imagesData = {
                totalHits: data.totalHits,
                total: data.total,
                images: data.hits
              }
              renderUsers(data.hits);
          
      
            }       
      })
      
      .catch(error => {
        console.log(error);
        iziToast.error({
          title: "",
          message: "Sorry, there are no images matching your search query. Please try again!",
        });
      });
  }
}

function renderUsers(images) {
  form.reset();
  
  const markup = images.map(image => {
      return `<div class="card"><a class="gallery-link" href="${image.largeImageURL}">
          <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
        </a>
        <ul class="list">
          <li class="item">Likes: <span>${image.likes}</span></li>
          <li class="item">Views: <span>${image.views}</span></li>
          <li class="item">Comments: <span>${image.comments}</span></li>
          <li class="item">Downloads: <span>${image.downloads}</span></li>
        </ul></div>`
    })
    .join("");

  imagesGallery.innerHTML = markup;
}