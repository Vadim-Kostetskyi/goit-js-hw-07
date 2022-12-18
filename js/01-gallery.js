import { galleryItems } from "./gallery-items.js";

const galeryBook = document.querySelector(".gallery");

const galeryElement = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>`;
  })
  .join("");
galeryBook.insertAdjacentHTML("afterbegin", galeryElement);

const imageClick = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`
  );
  instance.show();
};

galeryBook.addEventListener("click", imageClick);
