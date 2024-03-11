const { default: iziToast } = require("izitoast");

const button = document.querySelector("button");
const inputSearch = document.querySelector(".search");
const imagesGallery = document.querySelector(".gallery");


const submitSearchImages = button.addEventListener("submit", function(e){
  e.preventDefault();
  fetchImages()
     .then((images) => renderImages(images))
     .catch((error) => console.log(error));
});

function fetchImages() {

    return 
    fetch("https://pixabay.com/api/?key=42766573-a347fa67a5b7233d1286bfaa7&q=inputSearch.value_type=photo"
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
        // iziToast.success {
        //   title: "",
        //   message: "Sorry, there are no images matching your search query. Please try again!"
        // }
      }
      return response.json();
    });
  }

 
function renderUsers(images) {
  const markup = images
    .map((image) => {
      return 
      `<a class="gallery-link" href="${original}">
  
      <img

         class="gallery-image"

         src="${preview}"

         alt="${description}"

       />

     </a>`;
      
    })
    .join("");
  imagesGallery.insertAdjacentHTML("beforeend", markup);
  }


//   const form = document.querySelector('.form');

// button.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const delay = parseInt(this.elements['delay'].value);
//   const state = this.elements['state'].value;

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (state === 'fulfilled') {
//         resolve(delay);
//       } else {
//         reject(delay);
//       }
//     }, delay);
//   });

//   promise
//     .then(delay => {
//       iziToast.success({
//         title: '✅ Fulfilled',
//         message: `Fulfilled promise in ${delay}ms`,
//       });
//     })
//     .catch(delay => {
//       iziToast.error({
//         title: '❌ Rejected',
//         message: `Rejected promise in ${delay}ms`,
//       });
//     });
 //});