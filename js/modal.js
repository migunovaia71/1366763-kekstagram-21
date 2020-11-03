'use strict';

(function () {
  const KEY_ESCAPE = 'Escape';

  const uploadFile = document.querySelector('#upload-file');
  const uploadOverlay = document.querySelector('.img-upload__overlay');
  const uploadCancel = uploadOverlay.querySelector('#upload-cancel');
  const body = document.querySelector('body');
  const textDescription = document.querySelector('.text__description');

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
      window.scale.setImgScale();
      window.effects.setDefaultEffect();
  }

  uploadCancel.addEventListener('click', () => {
    closePopup();
  });
})();
