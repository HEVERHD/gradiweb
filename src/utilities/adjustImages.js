const images = document.querySelectorAll(".product-card img");

images.forEach((image) => {
  if (image.clientHeight === 398) {
    image.style.height = "247px";
  }
});
