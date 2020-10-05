'use strict';

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlInput = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');

let scaleControlValue = 100;

const setImgScale = (value) => {
  scaleControlInput.value = value + '%';
  imgPreview.style.transform = 'scale(' + value / 100; + ')';
}

setImgScale(scaleControlValue);

scaleControlBigger.onclick = () => {
  scaleControlValue += 25;
  if (scaleControlValue > 100) {
    scaleControlValue = 100
  }
  setImgScale(scaleControlValue);
}

scaleControlSmaller.onclick = () => {
  scaleControlValue -= 25;
  if (scaleControlValue < 25) {
    scaleControlValue = 25
  }
  setImgScale(scaleControlValue);

}
