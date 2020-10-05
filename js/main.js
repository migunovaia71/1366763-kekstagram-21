'use strict';

const MAX_NUMBER_PHRASE = 2;
const MAX_NUMBER_COMMENTS = 5;

const messages = ['Всё отлично!',
'В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!']

const names = ['Иванов', 'Петров', 'Сидоров'];

const picturesElement = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const getRandomInt = (minValue, maxValue) => {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

const generateMessage = (len = MAX_NUMBER_PHRASE) => {
  let result = '';
  for (let i = 0; i < len; i++) {
    result += messages[getRandomInt(0, messages.length - 1)] + ' ';
  };
  return result.trim();
}

const generateComments = (len = MAX_NUMBER_COMMENTS) => {
  const result = [];
  for (let i = 1; i <= len; i++) {
    result.push({
      avatar: 'img/avatar-' + getRandomInt(1, 6) + '.svg',
      message: generateMessage(getRandomInt(1, 2)),
      name: names[getRandomInt(0, names.length - 1)]
    })
  };
  return result;
}

const generateUserPhotos = (len = 25) => {
  const result = [];
  for (let i = 1; i <= len; i++) {
    result.push({
      url: 'photos/' + i + '.jpg',
      description: 'описание фотографии',
      likes: getRandomInt(15, 200),
      comments: generateComments(getRandomInt(1,5))
    });
  }
  return result;
}

const userPhotos = generateUserPhotos();

const renderPhotos = (photo) => {
  const element = pictureTemplate.cloneNode(true);
  element.querySelector('.picture__img').src = photo.url;
  element.querySelector('.picture__likes').textContent = photo.likes;
  element.querySelector('.picture__comments').textContent = photo.comments.length;

  return element;
}

const pullDocument = () => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < userPhotos.length; i++) {
    fragment.appendChild(renderPhotos(userPhotos[i]));
  }
  picturesElement.appendChild(fragment);
}

pullDocument();
