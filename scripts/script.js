var counter = 1;

setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

// let currentImageIndex = 0;
// const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

// function changeImage() {
//     const imgElement = document.getElementById('slider-img');
//     imgElement.src = images[currentImageIndex];
// }

// function nextImage() {
//     currentImageIndex++;
//     if (currentImageIndex > images.length - 1) currentImageIndex = 0;
//     changeImage();
// }

// function prevImage() {
//     currentImageIndex--;
//     if (currentImageIndex < 0) currentImageIndex = images.length - 1;
//     changeImage();
// }
