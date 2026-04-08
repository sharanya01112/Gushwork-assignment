// navbar scroll
let navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-80px";
  }
});

// zoom preview
let images = document.querySelectorAll(".carousel-track img");
let previewBox = document.getElementById("zoomPreview");
let previewImg = previewBox.querySelector("img");

images.forEach(function(img) {

  img.addEventListener("mouseenter", function() {
    previewBox.style.display = "flex";
    previewImg.src = img.src;
  });

  img.addEventListener("mouseleave", function() {
    previewBox.style.display = "none";
  });

});