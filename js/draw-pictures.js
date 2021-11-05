import * as data from './data.js';

const pictureTemplate = document.querySelector('#picture').content;
const picturesData = data.getRandomPictures();
const picturesContainer = document.querySelector('.pictures');

const fragment = document.createDocumentFragment();

for (const pictureData of picturesData) { // Наполняем шаблоны данными и укладываем готовые изображения в фрагмент
  const picture = pictureTemplate.cloneNode(true);

  const pictureImg = picture.querySelector('.picture__img');
  const pictureLikes = picture.querySelector('.picture__likes');
  const pictureComments = picture.querySelector('.picture__comments');

  pictureImg.src = pictureData.url;
  pictureLikes.insertAdjacentText('afterbegin', pictureData.likes);
  pictureComments.insertAdjacentText('afterbegin', pictureData.comments.length);

  fragment.appendChild(picture);
}

picturesContainer.appendChild(fragment); // Вставляем фрагмент на страницу
