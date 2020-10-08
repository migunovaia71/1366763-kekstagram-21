'use strict';

const effectLevelPin = document.querySelector('.effect-level__pin');
const effectLevelLine = document.querySelector('.effect-level__line');
const defaultLevelValue = document.querySelector('.effect-level__value');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');
const effectsRadios = document.querySelectorAll('.effects__radio');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const imgUploadForm = document.querySelector('.img-upload__form');
const effectsList = document.querySelector('.effects__list');
const defaultEffectRadio = document.querySelector('#effect-none');

effectsList.addEventListener('click', () => {
  const effectLevel = defaultLevelValue.value;
});

effectLevelPin.addEventListener('mouseup', () => {
  const effectLevel = (effectLevelPin.offsetLeft / effectLevelLine.offsetWidth) * 100;
});

let lastEffectClass = '';

const setDefaultEffect = () => {
  defaultEffectRadio.checked = true;
  setEffect(defaultEffectRadio);
}

const setEffect = (radio) => {
  if (lastEffectClass !== '') {
    imgUploadPreview.classList.remove(lastEffectClass);
  }
  if (radio.checked) {
    if (radio.value !== 'none') {
      const effectClass = 'effects__preview--' + radio.value;
      lastEffectClass = effectClass;
      imgUploadPreview.classList.add(effectClass);
      imgUploadEffectLevel.classList.remove('hidden');
    } else {
      imgUploadEffectLevel.classList.add('hidden');
    }
  }
}

imgUploadForm.addEventListener('change', (evt) => {
  if (evt.target.classList.contains('effects__radio')) {
    const radio = evt.target;
    setEffect(radio);
  }
});
