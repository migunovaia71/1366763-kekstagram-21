'use strict';

(function () {

    const KEY_ESCAPE = 'Escape';
    const NUMBER_COMMENTS = 5;

    const bigPicture = document.querySelector('.big-picture');
    const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
    const likesCount = bigPicture.querySelector('.likes-count');
    const commentsCount = bigPicture.querySelector('.comments-count');
    const commentTemplate = document.querySelector('#social__comment')
        .content
        .querySelector('.social__comment');
    const socialComments = bigPicture.querySelector('.social__comments');
    const socialCaption = bigPicture.querySelector('.social__caption');
    const socialCommentCount = bigPicture.querySelector('.social__comment-count');
    const commentsLoader = bigPicture.querySelector('.comments-loader');
    const body = document.querySelector('body');
    const pictureCancel = bigPicture.querySelector('#picture-cancel');

    const renderCommentsGroup = (comments, startIndex, endIndex) => {
      startIndex = Math.min(startIndex, comments.length);
      endIndex = Math.min(endIndex, comments.length);
      for (let i = startIndex;  i < endIndex; i++) {
          socialComments.appendChild(renderComment(comments[i]));
      }
      if (endIndex >= comments.length) {
        commentsLoader.classList.add('hidden');
      }
    };

    const open = (photo) => {
        bigPicture.classList.remove('hidden');
        bigPictureImg.src = photo.url;
        likesCount.textContent = photo.likes;
        commentsCount.textContent = photo.comments.length;
        const comments = photo.comments;
        socialComments.innerHTML = '';
        let commentsStart = 0;
        let commentsEnd = NUMBER_COMMENTS;
        renderCommentsGroup(photo.comments, commentsStart, commentsEnd);
        socialCaption.textContent = photo.description;
        socialCommentCount.classList.add('hidden');
        body.classList.add('modal-open');
        document.addEventListener('keydown', onPopupEscPress);
        commentsLoader.addEventListener('click', () => {
          commentsStart += NUMBER_COMMENTS;
          commentsEnd += NUMBER_COMMENTS;
          renderCommentsGroup(photo.comments, commentsStart, commentsEnd);
        });
    }

    const renderComment = (comment) => {
        const element = commentTemplate.cloneNode(true);
        const socialPicture = element.querySelector('.social__picture');
        socialPicture.src = comment.avatar;
        socialPicture.alt = comment.name;
        element.querySelector('.social__text').textContent = comment.message;
        return element;
    }

    const onPopupEscPress = (evt) => {
        if (evt.key === KEY_ESCAPE) {
          evt.preventDefault();
          close();
        }
      };
    
      const close = () => {
          bigPicture.classList.add('hidden');
          body.classList.remove('modal-open');
          document.removeEventListener('keydown', onPopupEscPress);
      }
    
      pictureCancel.addEventListener('click', () => {
        close();
      });



    window.popup = {
        open,
        close
      };

})();
