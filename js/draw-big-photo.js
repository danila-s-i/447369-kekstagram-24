/**
 * Заполняет данными окно с полноразмерным изображением и отрисовывает его на странице
 * @param {array} pictureData данные для заполнения
 */
function drawBigPicture (pictureData) {

  /* Чтобы контейнер с миниатюрами позади не прокручивался при скролле */

  const body = document.querySelector('body');

  body.classList.add('modal-open');

  /* Временно скрытые элементы */

  const socialCommentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  /* Полноразмерная фотография и информация о ней */

  const bigPicture = document.querySelector('.big-picture');
  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  const socialCaption = bigPicture.querySelector('.social__caption');
  const likesCount = bigPicture.querySelector('.likes-count');

  bigPictureImg.src = pictureData.url;
  socialCaption.textContent = pictureData.description;
  likesCount.textContent = pictureData.likes;

  /* Комментарии к полноразмерной фотографии */

  const commentsCount = bigPicture.querySelector('.comments-count');
  commentsCount.textContent = pictureData.comments.length;

  const comments = document.querySelector('.social__comments');
  const commentTemplate = comments.querySelector('.social__comment');
  const fragment = document.createDocumentFragment();

  for (const commentData of pictureData.comments) {
    const comment = commentTemplate.cloneNode(true);
    const commentImg = comment.querySelector('.social__picture');
    const commentText = comment.querySelector('.social__text');

    commentImg.src = commentData.avatar;
    commentImg.alt = commentData.name;
    commentText.textContent = commentData.message;

    fragment.appendChild(comment);
  }

  comments.innerHTML = '';
  comments.appendChild(fragment);

  /* Закрытие окна с полноразмерной фотографией */

  const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

  document.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape' && !bigPicture.classList.contains('hidden')) {
      bigPicture.classList.add('hidden');
      body.classList.remove('modal-open');
      comments.innerHTML = '';
      comments.appendChild(commentTemplate);
    }
  });

  bigPictureCancel.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    comments.innerHTML = '';
    comments.appendChild(commentTemplate);
  });

  /* Открытие окна с полноразмерной фотографией */

  bigPicture.classList.remove('hidden');
}

export {drawBigPicture};
