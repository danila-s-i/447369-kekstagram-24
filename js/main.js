/**
 * Возвращает случайное целое число из переданного диапазона включительно
 * @param {number} from от
 * @param {number} to до
 * @returns {number}
 */
function getRandomIntegerFromRange(from, to) {
  if (from > to) {
    from -= to;
    to += from;
    from = to - from;
  } else if (from === to) {return from;}

  return from + Math.trunc((to - from + 1) * Math.random());
}

/**
 * Проверка длины строки
 * @param {number} stringForCheck строка на проверку
 * @param {number} maxLength максимальная длина строки включительно
 * @returns {boolean} не длиннее ли строка максимальной длины
 */
function isNotLonger(stringForCheck, maxLength) {
  if (stringForCheck.length <= maxLength) {return true;}

  return false;
}

/**
 * Возвращает массив случайно сгенерированных комментариев
 * @param {number} idSeed число для генерации id
 * @returns {array} [ {id: ..., avatar: ..., message: ..., name: ...}, ... ]
 */
function getRandomComments(idSeed) {
  const comments = [];

  const MAX_COMMENTS = 14;
  const numberComments = getRandomIntegerFromRange(1, MAX_COMMENTS);

  const COMMENT_NAMES = [
    'Оля','Николай','Олег','Гриша','Наташа',
    'Света','Глеб','Дмитрий','Лена','Макс',
    'Никита','Нина','Слава','Миша','Вероника',
    'Давид','Мария','Настя','Лиза','Константин',
    'Полина','Иван','Ира','Аня','Фёдор',
  ];

  const COMMENT_MESSAGES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];

  for (let i = 0; i < numberComments; i++) {
    comments.push({
      id: `${ i + MAX_COMMENTS * (idSeed - 1) }`,
      avatar: `img/avatar-${  getRandomIntegerFromRange(1, 6)  }.svg`,
      message: COMMENT_MESSAGES[getRandomIntegerFromRange(0, COMMENT_MESSAGES.length - 1)],
      name: COMMENT_NAMES[getRandomIntegerFromRange(0, COMMENT_NAMES.length - 1)],
    });
  }

  return comments;
}

/**
 * Возвращает массив случайно сгенерированных фотографий
 * @returns {array} [ {id: ..., url: ..., description: ..., likes: ..., comments: ...}, ... ]
 */
function getRandomPhotos() {
  const photos = [];

  const NUMBER_PHOTOS = 25;
  const DESCRIPTIONS = [
    'Красные тюльпаны', 'Рыжий кот', 'Отдыхаю на пляже', 'Бегемот', 'Любимая кружка',
    'Концерт', 'В баре', 'Отдыхаем с друзьями', 'Чёрное море', 'Завтрак',
    'День рождения Даши', 'К третьей паре', 'Новый мотоцикл', 'Делаю дела', 'Ночная Москва',
    'Делаем ремонт', 'Велопробег', 'Пишу код', 'В магазин за покупками', 'На высоте',
    'Ностальгия', 'Закат', 'Отдых на природе', 'Шашлыки', 'ВДНХ',
  ];

  const idArr = Array.from({length: NUMBER_PHOTOS}, (value, index) => index + 1);
  const urlArr = Array.from({length: NUMBER_PHOTOS}, (value, index) => `photos/${  index + 1  }.jpg`);
  const descriptionsArr = Array.from({length: NUMBER_PHOTOS}, () => DESCRIPTIONS[getRandomIntegerFromRange(0, DESCRIPTIONS.length - 1)]);
  const likesArr = Array.from({length: NUMBER_PHOTOS}, () => getRandomIntegerFromRange(15, 200));
  const commentsArr = Array.from({length: NUMBER_PHOTOS}, (value, index) => getRandomComments(index));

  for (let i = 0; i < NUMBER_PHOTOS; i++) {
    photos.push({
      id: idArr[i],
      url: urlArr[i],
      description: descriptionsArr[i],
      likes: likesArr[i],
      comments: commentsArr[i],
    });
  }

  return photos;
}
