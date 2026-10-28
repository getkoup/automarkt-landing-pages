'use strict';

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const dialog = document.querySelector('#photo-dialog');
const expandedPhoto = document.querySelector('#expanded-photo');
const caption = document.querySelector('#photo-caption');
const photoControls = document.querySelector('.photo-viewer-controls');
const previousPhoto = document.querySelector('#previous-photo');
const nextPhoto = document.querySelector('#next-photo');
const photoPosition = document.querySelector('#photo-position');
const photoButtons = [...document.querySelectorAll('[data-image]')];
let photoTrigger;
let photoGroup = [];
let photoIndex = 0;

function showPhoto(index) {
  photoIndex = Math.max(0, Math.min(photoGroup.length - 1, index));
  const button = photoGroup[photoIndex];
  expandedPhoto.src = button.dataset.image;
  expandedPhoto.alt = button.querySelector('img').alt;
  caption.textContent = button.dataset.caption;
  photoControls.hidden = photoGroup.length < 2;
  previousPhoto.disabled = photoIndex === 0;
  nextPhoto.disabled = photoIndex === photoGroup.length - 1;
  photoPosition.textContent = `${photoIndex + 1} / ${photoGroup.length}`;
}

photoButtons.forEach((button) => {
  button.addEventListener('click', () => {
    photoTrigger = button;
    photoGroup = photoButtons.filter(photo => photo.dataset.photoGroup === button.dataset.photoGroup);
    showPhoto(photoGroup.indexOf(button));
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  });
});
previousPhoto.addEventListener('click', () => showPhoto(photoIndex - 1));
nextPhoto.addEventListener('click', () => showPhoto(photoIndex + 1));
dialog.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showPhoto(photoIndex + (event.key === 'ArrowLeft' ? -1 : 1));
  }
});
document.querySelector('#close-photo').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.style.overflow = '';
  photoTrigger?.focus();
});
