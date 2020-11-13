'use strict';

(function () {

  const ALERT_TIMEOUT = 5000;

  const URL = 'https://21.javascript.pages.academy/kekstagram/data';
  const picturesElement = document.querySelector('.pictures');
  const alertMessage = document.querySelector('.alert');
  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  const renderPhoto = (photo, index) => {
    const element = pictureTemplate.cloneNode(true);
    element.querySelector('.picture__img').src = photo.url;
    element.querySelector('.picture__likes').textContent = photo.likes;
    element.querySelector('.picture__comments').textContent = photo.comments.length;

    const onPhotoClick = (event) => {
      event.preventDefault();
      window.popup.open(photo);
    }

    element.addEventListener('click', onPhotoClick);

    return element;
  }

  const pullDocument = (photos) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < photos.length; i++) {
      fragment.appendChild(renderPhoto(photos[i], i));
    }
    picturesElement.querySelectorAll('.picture').forEach((element) => {
      element.remove();
    })
    picturesElement.appendChild(fragment);
  }

  const errorHandler = (errorMessage) => {
    alertMessage.classList.remove('hidden');
    setTimeout(() => {
      alertMessage.classList.add('hidden');
    }, ALERT_TIMEOUT);
  }

  const successHandler = (data) => {
    window.data.photos = data;
    pullDocument(data);
    window.filter.showFilters();
  }

  window.load.loadData(URL, successHandler, errorHandler);

  window.data = {
    photos: [],
    pullDocument: pullDocument
  };

})();

