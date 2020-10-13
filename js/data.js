'use strict';

(function () {

  const URL = 'https://21.javascript.pages.academy/kekstagram/data';
  const picturesElement = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  const renderPhoto = (photo) => {
    const element = pictureTemplate.cloneNode(true);
    element.querySelector('.picture__img').src = photo.url;
    element.querySelector('.picture__likes').textContent = photo.likes;
    element.querySelector('.picture__comments').textContent = photo.comments.length;

    return element;
  }

  const pullDocument = (photos) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < photos.length; i++) {
      fragment.appendChild(renderPhoto(photos[i]));
    }
    picturesElement.appendChild(fragment);
  }

  const errorHandler = (errorMessage) => {
    console.log(errorHandler);
  }

  const successHandler = (data) => {
    pullDocument(data);
  }

  window.load.loadData(URL, successHandler, errorHandler);

})();
