'use strict';

(function () {

  const ELEM_COUNT = 10;

  const imgFilters = document.querySelector('.img-filters');
  const filterDefault = document.querySelector('#filter-default');
  const filterRandom = document.querySelector('#filter-random');
  const filterDiscussed = document.querySelector('#filter-discussed');
  const imgFiltersButtons = document.querySelectorAll('.img-filters__button');

  const showFilters = () => {
    imgFilters.classList.remove('img-filters--inactive');
  }

  const clearStyles = () => {
    imgFiltersButtons.forEach((button) => {
      button.classList.remove('img-filters__button--active');
    });
  }

  const onDeafultFilterClick =  window.utils.debounce(() => {
    clearStyles();
    filterDefault.classList.add('img-filters__button--active');
    window.data.pullDocument(window.data.photos);
  });

  filterDefault.addEventListener('click', onDeafultFilterClick);

  const onRandomFilterClick =  window.utils.debounce(() => {
    clearStyles();
    filterRandom.classList.add('img-filters__button--active');
    let result = [];
    let indexes = [];
    const data = window.data.photos;
    for (let i = 0; i < data.length; i++) {
      const index = window.utils.getRandomInt(0, data.length - 1);
      if (!indexes.includes(index) && result.length < ELEM_COUNT) {
        indexes.push(index);
        result.push(data[index]);
      }
    }
    window.data.pullDocument(result);
  });

  filterRandom.addEventListener('click', onRandomFilterClick);

  const onDiscussedFilterClick =  window.utils.debounce(() => {
    clearStyles();
    filterDiscussed.classList.add('img-filters__button--active');
    const data = window.data.photos.slice(0);
    data.sort((photo1, photo2) => {
      return photo2.comments.length - photo1.comments.length;
    });
    window.data.pullDocument(data);  });

  filterDiscussed.addEventListener('click', onDiscussedFilterClick);

  window.filter = {
    showFilters
  };

})();
