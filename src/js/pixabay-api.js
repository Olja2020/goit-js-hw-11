const { default: iziToast } = require("izitoast");

const button = document.querySelector("button");
const inputSearch = document.querySelector(".search");
const form = document.querySelector("form");

const options = {
	method: "GET"
};

const submitSearchImages = button.addEventListener("submit", function(e){
  console.log(inputSearch.value,  form.event.target.elements.searchImages.value);
  fetch("https://pixabay.com/api/?key=42766573-a347fa67a5b7233d1286bfaa7&q=inputSearch.value_type=photo")
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    iziToast.success {
      title: "",
      message: "Sorry, there are no images matching your search query. Please try again!"
    }
    // Data handling
		console.log(data);
  })
  .catch(error => {
    // Error handling
		console.log(error);
  });
})

