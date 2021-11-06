import {picturesData} from './data.js';
import {drawBigPicture} from './draw-big-picture.js';

/* Наполняем шаблоны данными и укладываем готовые изображения в фрагмент */

const pictureTemplate = document.querySelector('#picture').content;
const fragment = document.createDocumentFragment();

for (const pictureData of picturesData) {
  const picture = pictureTemplate.querySelector('.picture').cloneNode(true);

  const pictureImg = picture.querySelector('.picture__img');
  const pictureLikes = picture.querySelector('.picture__likes');
  const pictureComments = picture.querySelector('.picture__comments');

  pictureImg.src = pictureData.url;
  pictureLikes.insertAdjacentText('afterbegin', pictureData.likes);
  pictureComments.insertAdjacentText('afterbegin', pictureData.comments.length);

  picture.addEventListener('click', (evt) => {
    evt.preventDefault();
    drawBigPicture(pictureData);
  });

  fragment.appendChild(picture);
}

/* Вставляем фрагмент на страницу */

const picturesContainer = document.querySelector('.pictures');
picturesContainer.appendChild(fragment);
