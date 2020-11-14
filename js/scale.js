'use strict';

(function () {

  const DEFAULT_SCALE = 100;
  const MIN_SCALE = 25;
  const MAX_SCALE = 100;
  const STEP_SCALE = 25;

  const scaleControlSmaller = document.querySelector(`.scale__control--smaller`);
  const scaleControlBigger = document.querySelector(`.scale__control--bigger`);
  const scaleControlInput = document.querySelector(`.scale__control--value`);
  const imgPreview = document.querySelector(`.img-upload__preview`);

  let scaleControlValue = DEFAULT_SCALE;

  const setImgScale = (value = DEFAULT_SCALE) => {
    scaleControlInput.value = value + `%`;
    imgPreview.style.transform = `scale(` + (value / 100) + `)`;
  };

  setImgScale(scaleControlValue);

  scaleControlBigger.addEventListener(`click`, () => {
    scaleControlValue += STEP_SCALE;
    if (scaleControlValue > MAX_SCALE) {
      scaleControlValue = MAX_SCALE;
    }
    setImgScale(scaleControlValue);
  });

  scaleControlSmaller.addEventListener(`click`, () => {
    scaleControlValue -= STEP_SCALE;
    if (scaleControlValue < MIN_SCALE) {
      scaleControlValue = MIN_SCALE;
    }
    setImgScale(scaleControlValue);
  });

  window.scale = {
    setImgScale
  };

})();
