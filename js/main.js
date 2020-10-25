'use strict';

const comments = [
  {
    avatar: `img/avatar-1.svg`,
    message: `Всё отлично!`,
    name: `Вадим`
  },

  {
    avatar: `img/avatar-2.svg`,
    message: `В целом всё неплохо. Но не всё.`,
    name: `Олег`
  },

  {
    avatar: `img/avatar-3.svg`,
    message: `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`,
    name: `Александр`
  },

  {
    avatar: `img/avatar-4.svg`,
    message: `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`,
    name: `Владимир`
  },

  {
    avatar: `img/avatar-5.svg`,
    message: `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`,
    name: `Николай`
  },

  {
    avatar: `img/avatar-6.svg`,
    message: `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`,
    name: `Артем`
  }
];

const pictureSection = document.querySelector(`.pictures`);

const pictureTemplate = document.querySelector(`#picture`).content
  .querySelector(`.picture`);

const photos = [
  {
    url: `photos/1.jpg`,
    description: comments[0],
    likes: 150
  },
  {
    url: `photos/2.jpg`,
    description: comments[1],
    likes: 70
  },
  {
    url: `photos/3.jpg`,
    description: comments[2],
    likes: 100
  },
  {
    url: `photos/4.jpg`,
    description: comments[3],
    likes: 55
  },
  {
    url: `photos/5.jpg`,
    description: comments[4],
    likes: 170
  },
  {
    url: `photos/6.jpg`,
    description: comments[5],
    likes: 95
  },
  {
    url: `photos/7.jpg`,
    description: comments[0],
    likes: 140
  },
  {
    url: `photos/8.jpg`,
    description: comments[1],
    likes: 128
  },
  {
    url: `photos/9.jpg`,
    description: comments[0],
    likes: 162
  },
  {
    url: `photos/10.jpg`,
    description: comments[1],
    likes: 85
  },
  {
    url: `photos/11.jpg`,
    description: comments[1],
    likes: 137
  },
  {
    url: `photos/12.jpg`,
    description: comments[1],
    likes: 180
  },
  {
    url: `photos/13.jpg`,
    description: comments[1],
    likes: 192
  },
  {
    url: `photos/14.jpg`,
    description: comments[1],
    likes: 123
  },
  {
    url: `photos/15.jpg`,
    description: comments[1],
    likes: 156
  },
  {
    url: `photos/16.jpg`,
    description: comments[1],
    likes: 200
  },
  {
    url: `photos/17.jpg`,
    description: comments[0],
    likes: 171
  },
  {
    url: `photos/18.jpg`,
    description: comments[0],
    likes: 186
  },
  {
    url: `photos/19.jpg`,
    description: comments[0],
    likes: 110
  },
  {
    url: `photos/20.jpg`,
    description: comments[0],
    likes: 115
  },
  {
    url: `photos/21.jpg`,
    description: comments[0],
    likes: 161
  },
  {
    url: `photos/22.jpg`,
    description: comments[0],
    likes: 144
  },
  {
    url: `photos/23.jpg`,
    description: comments[0],
    likes: 116
  },
  {
    url: `photos/24.jpg`,
    description: comments[0],
    likes: 159
  },
  {
    url: `photos/25.jpg`,
    description: comments[0],
    likes: 135
  }
];

const displayPhotos = function (photo) {
  let photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector(`.picture__img`).src = photo.url;
  photoElement.querySelector(`.picture__comments`).textContent = photo.description;
  photoElement.querySelector(`.picture__likes`).textContent = photo.likes;

  return photoElement;
};

const photoFragment = document.createDocumentFragment();

for (let i = 0; i < photos.length; i++) {
  photoFragment.appendChild(displayPhotos(photos[i]));
}

pictureSection.appendChild(photoFragment);

