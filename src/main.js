import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { images, createGalleryMarkup } from "./js/01-gallery.js";

// Stil ekleme
const style = document.createElement("style");
style.textContent = `
  .gallery { ... } 
  .gallery-item { ... } 
  .gallery-item img { ... } 
`;
document.head.appendChild(style);

// Galeri oluştur
const gallery = document.querySelector(".gallery");
gallery.innerHTML = createGalleryMarkup(images);

// SimpleLightbox başlat
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});