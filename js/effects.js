'use strict';

const effectLevelPin = document.querySelector('.effect-level__pin');
const effectLevelLine = document.querySelector('.effect-level__line');
const defaultLevelValue = document.querySelector('.effect-level__value');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');
const effectsRadios = document.querySelectorAll('.effects__radio');
const imgUploadPreview = document.querySelector('.img-upload__preview');

const effectsList = document.querySelector('.effects__list');

effectsList.addEventListener('click', () => {
  const effectLevel = defaultLevelValue.value;
});

effectLevelPin.addEventListener('mouseup', () => {
  const effectLevel = (effectLevelPin.offsetLeft / effectLevelLine.offsetWidth) * 100;
});

for (let i = 0, length = effectsRadios.length; i < length; i++) {
  effectsRadios[i].addEventListener('change', () => {
    imgUploadPreview.className = 'img-upload__preview';
    if (effectsRadios[i].checked) {
      if (effectsRadios[i].value !== 'none') {
        imgUploadPreview.classList.add('effects__preview--' + effectsRadios[i].value);
        imgUploadEffectLevel.classList.remove('hidden');
      } else {
        imgUploadEffectLevel.classList.add('hidden');
      }
    }
  });
}
