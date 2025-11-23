import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as i}from"./assets/vendor-CgTBfC_f.js";const p=document.createElement("style");p.textContent=`
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
  `;const e=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],n=document.querySelector(".gallery"),s=e.map(({preview:o,original:t,description:a})=>`
        <li class="gallery-item">
          <a class="gallery-link" 
          href="${t}">
            <img 
            src="${o}" 
            alt="${a}" 
           class="gallery-image" />
          </a>
        </li>`).join("");n.innerHTML=s;new i(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=01-gallery.js.map
