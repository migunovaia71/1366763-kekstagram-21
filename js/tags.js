'use strict';

const textHashtags = document.querySelector('.text__hashtags');

textHashtags.addEventListener('input', function () {
  const hashtags = textHashtags.value.split(' ');
  let errorMessage = '';
  console.log(hashtags);
  console.log(hashtags.length);

  const re = /^([a-zа-яё0-9]+)$/i;

  for (let i = 0; i < hashtags.length; i++) {
    if (hashtags[i].length > 20) {
      errorMessage = 'Не более 20 символов ';
    }

    if (hashtags[i][0] !== '#') {
      errorMessage = 'Первый символ - # ';
    }

    if (!re.test(hashtags[i].substring(1))) {
      errorMessage = 'Только буквы и цифры ';
    }

    for (let j = 0; j < hashtags.length; j++) {
      if (i !== j && hashtags[i] == hashtags[j]) {
        errorMessage = 'Хеш-теги должны отличаться ';
      }
    }

    if (hashtags.length > 5) {
      errorMessage = 'Тегов не должно быть больше 5 ';
    }

  }

  textHashtags.setCustomValidity(errorMessage);

  textHashtags.reportValidity();
});
