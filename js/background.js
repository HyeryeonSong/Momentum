const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)]; // randoem 이미지 선택

const bgImage = document.createElement("img"); // img 태그 생성

bgImage.src = `img/${chosenImage}`; // img 소스 지정

document.body.appendChild(bgImage); // 생성한 bgImage를 body에 입력. append : body 제일 하단에 입력 / prepend : body 제일 상단에 입력
