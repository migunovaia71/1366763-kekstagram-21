'use strict';

const MAX_TAG_LENGTH = 20;
const MAX_TAG_NUMBER = 5;

const textHashtags = document.querySelector('.text__hashtags');

textHashtags.addEventListener('input', function () {
  const hashtags = textHashtags.value.trim().toLowerCase().split(/\s+/);
  let errorMessage = '';
  const re = /^([a-zа-яё0-9]+)$/i;

  for (let i = 0; i < hashtags.length; i++) {

    if (hashtags[i][0] !== '#') {
      errorMessage = 'Первый символ - #';
      break;
    }

    if (hashtags[i].length > MAX_TAG_LENGTH || hashtags[i].length <= 1) {
      errorMessage = 'Длина от 2 до 20 символов ';
      break;
    }

    if (hashtags[i].indexOf('#', 1) !== -1) {
      errorMessage = 'Хештеги должны быть разделены пробелами';
      break;
    }

    if (!re.test(hashtags[i].substring(1))) {
      errorMessage = 'Только буквы и цифры';
      break;
    }

    for (let j = 0; j < hashtags.length; j++) {
      if (i !== j && hashtags[i] == hashtags[j]) {
        errorMessage = 'Хеш-теги должны отличаться';
        break;
      }
    }

    if (hashtags.length > MAX_TAG_NUMBER) {
      errorMessage = 'Тегов не должно быть больше 5';
      break;
    }

  }

  textHashtags.setCustomValidity(errorMessage);

  textHashtags.reportValidity();
});
