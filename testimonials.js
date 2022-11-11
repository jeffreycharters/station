/**
 *          ADD A NEW OBJECT TO THE testimonials ARRAY BELOW TO CREATE A NEW TESTIMONIAL.
 *          DON'T TOUCH THE REST OF THE CODE!!! (joking).
 *
 */
const testimonials = [
  {
    name: "Chris Fox",
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
    name: "publikphigor",
    position: "Front-end Developer & Open-source Contributor",
    testimonial:
      "I like the fact that I can collaborate with other developers across the world. I also like that my PRs are getting merged!",
  },
];

{  name: "Christine",
    position: "Station Contributor",
    testimonial:
      "I haven't heard about Open Source Projects until Micha introduced them to me in Scrimba's Discord server. I was hesistant at first because I thought you had to use HTML and other languages to contribute, but then I noticed Markdown could be used, so I decided to give it a chance! My first pull request was to add my name to the Contributors file. Since then, I've joined other organizations (I even got a Pull Shark badge! 😊).  If you're new to Open Source projects and want to join a judgement-free community, this is the place to start!",
  },

/**=================== SELECTORS ===================  */
const sliderContainer = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider--prev");
const btnRight = document.querySelector(".slider--next");
let counter = 1;
let slideSize, slides;

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

// create a clone of the last slide and the first slide
function cloneSlides() {
  testimonials.forEach((el, i, arr) => {
    if (i === 0) {
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
  slides = document.querySelectorAll(".slide");
  const sliderSize = 100 * testimonials.length;
  slideSize = 100 / testimonials.length;
  sliderContainer.style.width = `${sliderSize}%`;
  slides.forEach((slide) => {
    slide.style.width = `${slideSize}%`;
  });
}

function nextSlide() {
  if (counter >= slides.length - 1) return;
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

function init() {
  addSlides();
  cloneSlides();
  setSlideSizes();
  // move to the first  slide onload
  sliderContainer.style.transform = `translateX(-${slideSize * counter}%)`;
}
init();

/**=================== EVENT LISTENERS ===================  */
btnLeft.addEventListener("click", prevSlide);
btnRight.addEventListener("click", nextSlide);

// loop back to first/last slide
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
