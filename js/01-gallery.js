import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

galleryContainer.addEventListener('click', showModal);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `;
    })
    .join("");

}

function showModal(evt) {
    evt.preventDefault()
    const bigImage = evt.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${bigImage}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener('keydown', onKeydownEsc);
      },
      onClose: () => {
        window.removeEventListener('keydown', onKeydownEsc);
      },
    },
);

  const onKeydownEsc = evt => {
    console.log(evt.code);
    if (evt.code === 'Escape') {
      instance.close();
    }
  };
    instance.show() 
    
}
