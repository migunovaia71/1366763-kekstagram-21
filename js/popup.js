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
    const socialCommentDefault = bigPicture.querySelector('.social__comment-default');
    const commentsLoader = bigPicture.querySelector('.comments-loader');
    const body = document.querySelector('body');
    const pictureCancel = bigPicture.querySelector('#picture-cancel');

    const renderCommentsGroup = (comments, startIndex, endIndex) => {
      startIndex = Math.min(startIndex, comments.length);
      endIndex = Math.min(endIndex, comments.length);
      socialCommentDefault.textContent = endIndex;
      for (let i = startIndex;  i < endIndex; i++) {
          socialComments.appendChild(renderComment(comments[i]));
      }
      if (endIndex >= comments.length) {
        commentsLoader.classList.add('hidden');
      }
    };

    let onCommentsLoaderClick = null;

    const open = (photo) => {
        commentsLoader.classList.remove('hidden');
        bigPicture.classList.remove('hidden');
        bigPictureImg.src = photo.url;
        likesCount.textContent = photo.likes;
        const comments = photo.comments;
        commentsCount.textContent = comments.length;
        socialComments.innerHTML = '';
        let commentsStart = 0;
        let commentsEnd = NUMBER_COMMENTS;
        renderCommentsGroup(comments, commentsStart, commentsEnd);
        socialCaption.textContent = photo.description;
        body.classList.add('modal-open');
        document.addEventListener('keydown', onPopupEscPress);
        commentsLoader.addEventListener('click', onCommentsLoaderClick = () => {
          commentsStart += NUMBER_COMMENTS;
          commentsEnd += NUMBER_COMMENTS;
          renderCommentsGroup(comments, commentsStart, commentsEnd);
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
          commentsLoader.removeEventListener('click', onCommentsLoaderClick);
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
