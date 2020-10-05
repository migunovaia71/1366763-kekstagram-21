'use strict';

const effectLevelPin = document.querySelector('.effect-level__pin');
const effectLevelLine = document.querySelector('.effect-level__line');
const defaultLevelValue = document.querySelector('.effect-level__value');

const effectsList = document.querySelector('.effects__list');

effectsList.onclick = () => {
  const effectLevel = defaultLevelValue.value;
}

effectLevelPin.onmouseup = () => {
  const effectLevel = (effectLevelPin.offsetLeft / effectLevelLine.offsetWidth) * 100;
}

