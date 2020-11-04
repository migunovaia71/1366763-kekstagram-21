'use strict';

(function () {

  const effectLevelPin = document.querySelector('.effect-level__pin');
  const effectLevelLine = document.querySelector('.effect-level__line');
  const defaultLevelValue = document.querySelector('.effect-level__value');
  const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');
  const effectsRadios = document.querySelectorAll('.effects__radio');
  const imgUploadPreview = document.querySelector('.img-upload__preview');
  const imgUploadForm = document.querySelector('.img-upload__form');
  const effectsList = document.querySelector('.effects__list');
  const defaultEffectRadio = document.querySelector('#effect-none');
  const effectLevelDepth = document.querySelector('.effect-level__depth');

  let lastEffectClass = '';


  const setEffectLevel = (persent) => {
    const newPercentString = persent + '%';
    effectLevelPin.style.left = newPercentString;
    effectLevelDepth.style.width = newPercentString;

    switch(lastEffectClass) {
      case 'effects__preview--chrome':
        imgUploadPreview.style.filter = 'grayscale(' + persent/100 + ')';
        break;
      case 'effects__preview--sepia':
        imgUploadPreview.style.filter = 'sepia(' + persent/100 + ')';
        break;
      case 'effects__preview--marvin':
          imgUploadPreview.style.filter = 'invert(' + persent + '%)';
          break;
      case 'effects__preview--phobos':
        imgUploadPreview.style.filter = 'blur(' + persent/100*3 + 'px)';
        break;
      case 'effects__preview--heat':
        imgUploadPreview.style.filter = 'brightness(' + (persent/100*2 + 1) + ')';
        break;
      default:
        imgUploadPreview.style.filter = '';
        break;
    }
  }

  effectLevelPin.addEventListener('mousedown', (event) => {
    event.preventDefault();

    const onMouseMove = (moveEvent) => {
      moveEvent.preventDefault();

      let newPercent = (moveEvent.clientX - effectLevelLine.getBoundingClientRect().left) / effectLevelLine.offsetWidth * 100;
      newPercent = Math.max(Math.min(newPercent, 100), 0);
      setEffectLevel(newPercent);
    }

    const onMouseUp = (upEvent) => {
      upEvent.preventDefault(); 
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);   
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

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
        lastEffectClass = '';
        imgUploadEffectLevel.classList.add('hidden');
      }
      const effectLevel = defaultLevelValue.value;
      setEffectLevel(effectLevel);
    }
  }

  imgUploadForm.addEventListener('change', (evt) => {
    if (evt.target.classList.contains('effects__radio')) {
      const radio = evt.target;
      setEffect(radio);
    }
  });

  window.effects = {
    setDefaultEffect: setDefaultEffect
  }
})();
