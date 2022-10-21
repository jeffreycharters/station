/**
 *          ADD A NEW OBJECT TO THE testimonials ARRAY BELOW TO CREATE A NEW TESTIMONIAL.
 *          DON'T TOUCH THE REST OF THE CODE!!! (joking).
 *
 */
const testimonials = [
  {
    name: "1Chris Fox",
    position: "CEO, Mighty Schools",
    testimonial: "John Doe saved us from a web disaster.",
  },

  {
    name: "Rebecca Flex",
    position: "CEO, Company",
    testimonial: "John Doe saved us from a web disaster.",
  },

  {
    name: "Micha",
    position: "Station Contributor",
    testimonial:
      "This is the first open source project I've ever worked on. I was nervous at first, but it's really been fun! My first pull request was to change the font for the page. You should definitely jump in, this is a very friendly environment where we are all learning. 😊",
  },
  {
    name: "Micha",
    position: "Station Contributor",
    testimonial:
      "This is the first open source project I've ever worked on. I was nervous at first, but it's really been fun! My first pull request was to change the font for the page. You should definitely jump in, this is a very friendly environment where we are all learning. 😊",
  },
  {
    name: "Micha",
    position: "Station Contributor",
    testimonial:
      "This is the first open source project I've ever worked on. I was nervous at first, but it's really been fun! My first pull request was to change the font for the page. You should definitely jump in, this is a very friendly environment where we are all learning. 😊",
  },
  {
    name: "6Micha",
    position: "Station Contributor",
    testimonial:
      "This is the first open source project I've ever worked on. I was nervous at first, but it's really been fun! My first pull request was to change the font for the page. You should definitely jump in, this is a very friendly environment where we are all learning. 😊",
  },
];

/**=================== SELECTORS ===================  */
const sliderContainer = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider--prev");
const btnRight = document.querySelector(".slider--next");
let counter = 1;
let slideSize;

/**=================== FUNCTIONS ===================  */
// Generate each slide using the objects in the testimonials array and add them as a child of the slider.
function addSlides() {
  sliderContainer.innerHTML = "";
  testimonials.forEach((el) => {
    let html = `
    <div class="slide">
        <div class="slide-inner">
            <h2 class="testminonial_name">${el.name}</h2>
            <h3 class="testimonial_post">${el.position}</h3>
            <p class="testimonial_text">${el.testimonial}</p>
        </div>
    </div>
    `;
    sliderContainer.insertAdjacentHTML("beforeend", html);
  });
}

function cloneSlides() {
  // create a clone of the last slide and the first slide
  testimonials.forEach((el, i, arr) => {
    if (i === 0) {
      console.log(1);
      let firstClone = `
        <div class="slide firstClone">
            <div class="slide-inner">
                <h2 class="testminonial_name">${el.name}</h2>
                <h3 class="testimonial_post">${el.position}</h3>
                <p class="testimonial_text">${el.testimonial}</p>
            </div>
        </div>
        `;
      sliderContainer.insertAdjacentHTML("beforeend", firstClone);
    }
    if (i === arr.length - 1) {
      let lastClone = `
          <div class="slide lastClone">
              <div class="slide-inner">
                  <h2 class="testminonial_name">${el.name}</h2>
                  <h3 class="testimonial_post">${el.position}</h3>
                  <p class="testimonial_text">${el.testimonial}</p>
              </div>
          </div>
          `;
      sliderContainer.insertAdjacentHTML("afterbegin", lastClone);
    }
  });
}

// Dynamically set the size of the slider and slides. Each slide's width is an equal fraction of the slider.
function setSlideSizes() {
  const slides = document.querySelectorAll(".slide");
  const sliderSize = 100 * testimonials.length;
  slideSize = 100 / testimonials.length;
  sliderContainer.style.width = `${sliderSize}%`;
  slides.forEach((slide) => {
    slide.style.width = `${slideSize}%`;
  });
}

function nextSlide() {
  if (counter >= testimonials.length - 1) return;
  counter++;
  sliderContainer.style.transition = `transform 0.4s ease-in-out`;
  sliderContainer.style.transform = `translateX(-${slideSize * counter}%)`;
}

function prevSlide() {
  if (counter <= 0) return;
  counter--;
  sliderContainer.style.transition = `transform 0.4s ease-in-out`;
  sliderContainer.style.transform = `translateX(-${slideSize * counter}%)`;
}

addSlides();
cloneSlides();
setSlideSizes();
sliderContainer.style.transform = `translateX(-${slideSize * counter}%)`;

/**=================== EVENT LISTENERS ===================  */
btnLeft.addEventListener("click", prevSlide);
btnRight.addEventListener("click", nextSlide);

// loop back to first slide
sliderContainer.addEventListener("transitionend", () => {
  if (slides[counter].classList.contains("lastClone")) {
    sliderContainer.style.transition = "none";
    counter = slides.length - 2;
    sliderContainer.style.transform = `translateX(-${slideSize * counter}%)`;
  }
  if (slides[counter].classList.contains("firstClone")) {
    sliderContainer.style.transition = "none";
    counter = slides.length - counter;
    sliderContainer.style.transform = `translateX(-${slideSize * counter}%)`;
  }
});
