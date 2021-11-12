import {isNotLonger} from './util.js';

/* Открытие формы редактирования изображения */

const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');

uploadFile.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
});

/* Валидация поля с хэш-тегами */

const hashtagsInput = document.querySelector('.text__hashtags');

hashtagsInput.addEventListener('input', () => {
  hashtagsInput.setCustomValidity('');

  let hashtags = hashtagsInput.value;
  hashtags = hashtags.split(' ');
  hashtags = hashtags.map((value) => value.toLowerCase());

  const viewed = [];

  for (const hashtag of hashtags) {
    if (hashtags.length === 1 && hashtags[0] === '') {break;}

    if (/^[^#]/.test(hashtag)) {hashtagsInput.setCustomValidity('Хэш-тег должен начинаться с \'#\'');}
    else if (/^#$/.test(hashtag)) {hashtagsInput.setCustomValidity('Хэш-тег не может состоять только из \'#\'');}
    else if (!/^#[A-Za-zА-Яа-я0-9]+/.test(hashtag)) {hashtagsInput.setCustomValidity('Хэш-тег не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д');}
    else if (hashtag.length > 20) {hashtagsInput.setCustomValidity('Превышена максимальная длина хэш-тега (20 символов)');}
    else if (hashtags.length > 5) {hashtagsInput.setCustomValidity('Превышено максимальное количество хэш-тегов (5 штук)');}
    else if (viewed.includes(hashtag)) {hashtagsInput.setCustomValidity('Хэш-теги не должны повторяться');}

    viewed.push(hashtag);
  }

  hashtagsInput.reportValidity();
});

/* Валидация поля с комментарием */

const descriptionInput = document.querySelector('.text__description');

descriptionInput.addEventListener('input', () => {
  descriptionInput.setCustomValidity('');

  const description = descriptionInput.value;

  if (!isNotLonger(description, 140)) {descriptionInput.setCustomValidity('Длина комментария не может превышать 140 символов');}

  descriptionInput.reportValidity();
});

/* Закрытие формы редактирования изображения */

let isInputFocus = false;

hashtagsInput.addEventListener('focus', () => {
  isInputFocus = true;
});

hashtagsInput.addEventListener('blur', () => {
  isInputFocus = false;
});

descriptionInput.addEventListener('focus', () => {
  isInputFocus = true;
});

descriptionInput.addEventListener('blur', () => {
  isInputFocus = false;
});

const uploadCancel = document.querySelector('#upload-cancel');

uploadCancel.addEventListener('click', () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';
});

document.addEventListener('keydown', (evt) => {
  if (evt.code === 'Escape' && !imgUploadOverlay.classList.contains('hidden') && !isInputFocus ) {
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    uploadFile.value = '';
  }
});
