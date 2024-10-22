let slide_img = document.getElementById("slider-img");
let next = document.getElementById("next");
let prev = document.getElementById("previous");
let current = document.getElementById("current");
let photos = [
  { url: "./img-1.jpeg" },
  { url: "./img-2.jpeg" },
  { url: "./img-3.jpeg" },
  { url: "./img-4.jpeg" },
];
// will give the image the first url
let currentIndex = 0;
slide_img.src = photos[currentIndex].url;

current.textContent = `${currentIndex + 1}/${photos.length}`;
next.addEventListener("click", () => {
  if (currentIndex < photos.length) {
    currentIndex++;
    slide_img.src = photos[currentIndex].url;
    current.textContent = `${currentIndex + 1}/${photos.length}`;
  }
});
prev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    slide_img.src = photos[currentIndex].url;
    current.textContent = `${currentIndex + 1}/${photos.length}`;
  }
});
