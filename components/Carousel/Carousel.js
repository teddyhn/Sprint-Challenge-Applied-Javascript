/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {

  let carousel = document.createElement('div');
  carousel.classList.add('carousel');

  let leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = ' < ';

  let rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = ' > ';

  let img1 = document.createElement('img');
  img1.src = './assets/carousel/mountains.jpeg'
  let img2 = document.createElement('img');
  img2.src = './assets/carousel/computer.jpeg'
  let img3 = document.createElement('img');
  img3.src = './assets/carousel/trees.jpeg'
  let img4 = document.createElement('img');
  img4.src = './assets/carousel/turntable.jpeg'

  carousel.appendChild(leftButton)
  carousel.appendChild(img1)
  carousel.appendChild(img2)
  carousel.appendChild(img3)
  carousel.appendChild(img4)
  carousel.appendChild(rightButton)

  let carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.appendChild(carousel);

  const images = [img1, img2, img3, img4];

  images.forEach(item => {
    item.classList.add('active');
  })

  let counter = 0;
  let amount = images.length;
  let current = images[0];

  function navigate(direction) {
    current.classList.remove('current');
    counter = counter + direction;
    if (direction === -1 && counter < 0) {
      counter = amount - 1;
    }
    if (direction === 1 && !images[counter]) {
      counter = 0;
    }
    current = images[counter];
    current.classList.add('current');
  }

  rightButton.addEventListener('click', evt => {
    navigate(1);
  });

  leftButton.addEventListener('click', evt => {
    navigate(-1);
  });

  navigate(0);

  return carousel;
}

Carousel();