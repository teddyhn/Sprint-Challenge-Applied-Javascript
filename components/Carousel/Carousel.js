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

  let img1 = document.createElement('img');
  img1.src = './assets/carousel/mountains.jpeg'
  img1.classList.add('active');
  let img2 = document.createElement('img');
  img2.src = './assets/carousel/computer.jpeg'
  let img3 = document.createElement('img');
  img3.src = './assets/carousel/trees.jpeg'
  let img4 = document.createElement('img');
  img4.src = './assets/carousel/turntable.jpeg'

  const images = [img1, img2, img3, img4];

  let rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = ' > ';
  rightButton.addEventListener('click', evt => {
    for (i = 0; i <= images.length; i++) {
      if (images[i].classList.contains('active')) {
        images[i].classList.toggle('active');
        images[i+1].classList.add('active')
      }
    }
  })

  carousel.appendChild(leftButton)
  carousel.appendChild(img1)
  carousel.appendChild(img2)
  carousel.appendChild(img3)
  carousel.appendChild(img4)
  carousel.appendChild(rightButton)

  let carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.appendChild(carousel);

  return carousel;
}

Carousel();