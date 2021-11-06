import {getRandomIntegerFromRange} from './util.js';

/**
 * Возвращает массив случайно сгенерированных комментариев
 * @param {number} idSeed число для генерации id
 * @returns {array} [ {id: ..., avatar: ..., message: ..., name: ...}, ... ]
 */
function getRandomComments(idSeed) {
  const MAX_COMMENTS = 14;
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

  const comments = [];
  const numberComments = getRandomIntegerFromRange(1, MAX_COMMENTS);

  for (let i = 0; i < numberComments; i++) {
    comments.push({
      id: `${ i + MAX_COMMENTS * (idSeed) }`,
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
function getRandomPictures() {
  const NUMBER_PICTURES = 25;
  const DESCRIPTIONS = [
    'Красные тюльпаны', 'Рыжий кот', 'Отдыхаю на пляже', 'Бегемот', 'Любимая кружка',
    'Концерт', 'В баре', 'Отдыхаем с друзьями', 'Чёрное море', 'Завтрак',
    'День рождения Даши', 'К третьей паре', 'Новый мотоцикл', 'Делаю дела', 'Ночная Москва',
    'Делаем ремонт', 'Велопробег', 'Пишу код', 'В магазин за покупками', 'На высоте',
    'Ностальгия', 'Закат', 'Отдых на природе', 'Шашлыки', 'ВДНХ',
  ];

  const pictures = [];

  const idArr = Array.from({length: NUMBER_PICTURES}, (value, index) => index + 1);
  const urlArr = Array.from({length: NUMBER_PICTURES}, (value, index) => `pictures/${  index + 1  }.jpg`);
  const descriptionsArr = Array.from({length: NUMBER_PICTURES}, () => DESCRIPTIONS[getRandomIntegerFromRange(0, DESCRIPTIONS.length - 1)]);
  const likesArr = Array.from({length: NUMBER_PICTURES}, () => getRandomIntegerFromRange(15, 200));
  const commentsArr = Array.from({length: NUMBER_PICTURES}, (value, index) => getRandomComments(index));

  for (let i = 0; i < NUMBER_PICTURES; i++) {
    pictures.push({
      id: idArr[i],
      url: urlArr[i],
      description: descriptionsArr[i],
      likes: likesArr[i],
      comments: commentsArr[i],
    });
  }

  return pictures;
}

const picturesData = getRandomPictures();

export {picturesData};
