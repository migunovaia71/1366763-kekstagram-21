const KEY_ESCAPE = 'Escape';

const uploadFile = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = uploadOverlay.querySelector('#upload-cancel');
const body = document.querySelector('body');
const defaultEffectRadio = document.querySelector('#effect-none');

uploadFile.addEventListener('change', () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscPress);
});

const onPopupEscPress = (evt) => {
  if (evt.key === KEY_ESCAPE) {
    evt.preventDefault();
    closePopup();
  }
};

const closePopup = () => {
    uploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscPress);
    setImgScale();
    defaultEffectRadio.checked = true;
    setEffect(defaultEffectRadio);
}

uploadCancel.addEventListener('click', () => {
  closePopup();
});
