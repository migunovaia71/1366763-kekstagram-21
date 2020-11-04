'use strict';

(function () {
  const KEY_ESCAPE = 'Escape';
  const URL = 'https://21.javascript.pages.academy/kekstagram';

  const uploadFile = document.querySelector('#upload-file');
  const uploadOverlay = document.querySelector('.img-upload__overlay');
  const uploadCancel = uploadOverlay.querySelector('#upload-cancel');
  const body = document.querySelector('body');
  const textDescription = document.querySelector('.text__description');
  const imgUploadForm = document.querySelector('.img-upload__form');
  const main = document.querySelector('main');
  const successTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');
  const errorTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');

  uploadFile.addEventListener('change', () => {
    uploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onPopupEscPress);
  });

  const onPopupEscPress = (evt) => {
    if (evt.key === KEY_ESCAPE && document.activeElement !== textDescription) {
      evt.preventDefault();
      closePopup();
    }
  };

  const closePopup = () => {
      uploadOverlay.classList.add('hidden');
      body.classList.remove('modal-open');
      document.removeEventListener('keydown', onPopupEscPress);
      imgUploadForm.reset();
      window.effects.setEffectLevel();
      window.scale.setImgScale();
  }

  uploadCancel.addEventListener('click', () => {
    closePopup();
  });

  const showMessage = (template, buttonClass = '.success__button') => {
    const element = template.cloneNode(true);
    main.appendChild(element);

    const closeMessage = () => {
      element.remove();
      document.removeEventListener('keydown', onKeyPress);
    }

    const onKeyPress = (evt) => {
      if (evt.key === KEY_ESCAPE) {
        evt.preventDefault();
        closeMessage();
      }
    }

    element.querySelector(buttonClass).addEventListener('click', closeMessage);
    element.addEventListener('click', (event) => {
      if (event.target === element) {
        closeMessage();
      }
    });
    document.addEventListener('keydown', onKeyPress);
  }

  
  imgUploadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(imgUploadForm);

    const errorHandler = (errorMessage) => {
      console.log(errorMessage);
      showMessage(errorTemplate, '.error__button');
    }
  
    const successHandler = (data) => {
      console.log(data);
      closePopup();
      showMessage(successTemplate, '.success__button');
    }

    if (imgUploadForm.checkValidity()) {
      window.load.loadData(URL, successHandler, errorHandler, 'POST', formData);
    } else {
      // TODO: добавляем рамки красные
    }
    
  });

})();
