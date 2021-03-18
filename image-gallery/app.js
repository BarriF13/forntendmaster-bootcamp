const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const galleryImgs = document.querySelectorAll('.gallery-img');
let currentSelected = 0;

prevButton.addEventListener('click', () => {
  galleryImgs[currentSelected].classList.remove('active');
  currentSelected--;
  galleryImgs[currentSelected].classList.add('active');
  nextButton.disabled = false;
  if (currentSelected === 0) {
    prevButton.disabled = true;
  }
})
nextButton.addEventListener('click', () => {
  galleryImgs[currentSelected].classList.remove('active');
  currentSelected++;
  galleryImgs[currentSelected].classList.add('active');

  prevButton.disabled = false;

  if (galleryImgs.length === currentSelected + 1) {
    nextButton.disabled = true;
  }
})