const lightbox = new SimpleLightbox(".card a");

const options = {
  gutterPixels: 50,
};

const filterizr = new Filterizr(".portfolio-elements", options);

let filtersList = document.querySelectorAll(".filters li");
filtersList.forEach(function (filterItem) {
  filterItem.addEventListener("click", function () {
    document.querySelector(".filters .active").classList.remove("active");
    this.classList.add("active");
  });
});
