const { default: iziToast } = require("izitoast");

const button = document.querySelector("button");
const inputSearch = document.querySelector(".search");
const imagesGallery = document.querySelector(".gallery");


const submitSearchImages = button.addEventListener("submit", function(){
  fetchImages()
     .then((images) => renderImages(images))
     .catch((error) => console.log(error));
});

function fetchUsers() {

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

 

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUsers(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch(
//     "https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name"
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

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
