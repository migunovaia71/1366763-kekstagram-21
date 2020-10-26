'use strict';

(function () {

  const DEBOUNCE_INTERVAL = 500; // ms

  const getRandomInt = (minValue, maxValue) => {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }

  window.utils = {
    getRandomInt
  };

  
  window.utils.debounce = function (cb) {
    var lastTimeout = null;

    return function(...parameters) {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function() {
        cb(...parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };

})();