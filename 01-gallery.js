import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as e}from"./assets/vendor-CgTBfC_f.js";const t=document.createElement("style");t.textContent=`
.gallery {
  list-style: none;
  padding: 0;
  margin: 24px auto;
  gap: 24px;
  max-width: 1200px;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.gallery-item {
  overflow: hidden;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
}

.gallery-item img {
  display: block;
  width: 360px;
  height: auto;
  cursor: pointer;
}

.gallery-item a {
  text-decoration: none;
}
  `;const a=document.querySelector(".gallery");a.innerHTML=markup;new e(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=01-gallery.js.map
