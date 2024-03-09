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


// const submitSearchImages = button.addEventListener("submit", function(){
//   fetchImages()
//      .then((images) => renderImages(images))
//      .catch((error) => console.log(error));
// });

// function fetchUsers() {

//     return 
//     fetch("https://pixabay.com/api/?key=42766573-a347fa67a5b7233d1286bfaa7&q=inputSearch.value_type=photo"
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//         // iziToast.success {
//         //   title: "",
//         //   message: "Sorry, there are no images matching your search query. Please try again!"
//         // }
//       }
//       return response.json();
//     });
//   }

 
// function renderUsers(images) {
//   const markup = images
//     .map((image) => {
//       return 
//       `<a class="gallery-link" href="${original}">
  
//       <img

//          class="gallery-image"

//          src="${preview}"

//          alt="${description}"

//        />

//      </a>`;
      
//     })
//     .join("");
//   imagesGallery.insertAdjacentHTML("beforeend", markup);
//   }

button.addEventListener("click", function(event) {
  event.preventDefault(); // Відміна перезавантаження сторінки під час події click на кнопці
  fetchImages()
    .then(images => renderImages(images))
    .catch(error => console.log(error));
});

function fetchImages() {
  const url = "https://pixabay.com/api/?key=42766573-a347fa67a5b7233d1286bfaa7&q=${inputSearch.value}&image_type=photo";
  
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
}

function renderImages(images) {
  // const markup = images.map(image => {
  //   return 
  //      <a class="gallery-link"
  //     // href="${image.largeImageURL}">
  //     //   <img
  //     //      class="gallery-image"
  //     //      src="${image.webformatURL}"
  //     //      alt="${image.tags}"
  //        >
  //     </a>;
  // }).join("");

  // imagesGallery.innerHTML = markup;
  console.log('2');
}
