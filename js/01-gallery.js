import { galleryItems } from './gallery-items.js';

const ulEl = document.querySelector(".gallery");

const markUp = galleryItems.map(({ preview, original, description}) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`   
}).join("");

ulEl.insertAdjacentHTML("beforeend", markUp);

let modal = null;
ulEl.addEventListener('click', onOpenMadal);
function onOpenMadal(e) {
   e.preventDefault();
 if (e.target.nodeName !== "IMG") return;
  modal = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="1000" >`,
    {
      onShow: () => {
        document.addEventListener("keydown", onEscapeClick);
        document.body.style.overflow = "hidden"
      },
      onClose: () => {
  document.removeEventListener('keydown', onEscapeClick);
  document.body.style.overflow = "visible"
}
    }
  )
  modal.show(); 
}

function onEscapeClick(e) {
  if (e.code !== "Escape") return;
    closeModal();
}

function closeModal() {
  modal.close()
}
