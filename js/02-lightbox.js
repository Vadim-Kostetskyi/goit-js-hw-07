import { galleryItems } from "./gallery-items.js";

const galeryBook = document.querySelector(".gallery");

const galeryElement = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>`;
  })
  .join("");
galeryBook.insertAdjacentHTML("afterbegin", galeryElement);

const gallery = new SimpleLightbox(".gallery a");

galeryBook.addEventListener("click", imageClick);
