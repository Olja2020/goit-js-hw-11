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
const form = document.querySelector("form");

const options = {
	method: "GET"
};

const submitSearchImages = button.addEventListener("submit", function(e){
  console.log(inputSearch.value,  form.event.target.elements.searchImages.value);
  if(inputSearch.value) {
  fetch("<https://jsonplaceholder.typicode.com/inputSearch.value>")
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // Data handling
		console.log(data);
  })
  .catch(error => {
    // Error handling
		console.log(error);
  });
}
})
