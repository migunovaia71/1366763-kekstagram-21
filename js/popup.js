'use strict';

(function () {

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


    const open = (photo) => {
        bigPicture.classList.remove('hidden');
        bigPictureImg.src = photo.url;
        likesCount.textContent = photo.likes;
        commentsCount.textContent = photo.comments.length;
        const comments = photo.comments;
        socialComments.innerHTML = '';
        for (let i = 0;  i < comments.length; i++) {
            socialComments.appendChild(renderComment(comments[i]));
        }
        socialCaption.textContent = photo.description;
        socialCommentCount.classList.add('hidden');
        commentsLoader.classList.add('hidden');
        body.classList.add('modal-open');
    }

    const renderComment = (comment) => {
        const element = commentTemplate.cloneNode(true);
        const socialPicture = element.querySelector('.social__picture');
        socialPicture.src = comment.avatar;
        socialPicture.alt = comment.name;
        element.querySelector('.social__text').textContent = comment.message;
        return element;
    }

    window.popup = {
        open
      };

})();
