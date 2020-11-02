'use strict';

(function () {

  const URL = 'https://21.javascript.pages.academy/kekstagram/data';
  const picturesElement = document.querySelector('.pictures');
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
    console.log(errorHandler);
  }

  const successHandler = (data) => {
    window.data.loadedData = data;
    pullDocument(data);
    window.filter.showFilters();
  }

  window.load.loadData(URL, successHandler, errorHandler);

  window.data = {
    loadedData: [],
    pullDocument: pullDocument
  };

})();

