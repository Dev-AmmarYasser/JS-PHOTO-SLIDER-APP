var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// console.table(sliderImages);

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.querySelector("#slide-number");

// Previuos And Next Buttons
var prevButton = document.querySelector(".prev");

var nextButton = document.querySelector(".next");

// Handle Click On Next And Previous
prevButton.onclick = prevSlide;

nextButton.onclick = nextSlide;

// Create The UL Elements
var paginationElement = document.createElement("ul");

// Select Indicators Div
var indicators = document.querySelector(".indicators");

// Set Id For It
paginationElement.setAttribute("id", "pagination-ul");

// Loop On Slides
for (let i = 1; i <= slidesCount; i++) {
  var paginationLi = document.createElement("li");

  paginationLi.setAttribute("data-index", i);

  var paginationLiText = document.createTextNode(i);

  paginationLi.appendChild(paginationLiText);

  paginationElement.appendChild(paginationLi);
}

indicators.appendChild(paginationElement);

// Get The New Created Ul
var paginationUl = document.querySelector("#pagination-ul");

var paginationBullets = document.querySelectorAll("#pagination-ul li");

// Loop Through All Bullets Items
for (var i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));

    theChecker();
  };
}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {
  if (currentSlide < slidesCount) {
    currentSlide++;
    theChecker();
  }
}

// prev Slide Function
function prevSlide() {
  if (currentSlide > 1) {
    currentSlide--;
    theChecker();
  }
}

// Create The CHecker Function

function theChecker() {
  // Set The Slide Number
  slideNumberElement.textContent =
    "Slide " + currentSlide + " Of " + slidesCount;

  removeAllActive();

  // Set Active Class On Currnet Slide
  sliderImages[currentSlide - 1].classList.add("active");

  // Set Active Class On Pagination Bullet
  paginationUl.children[currentSlide - 1].classList.add("active");

  // Check If Currnt Slide Is First
  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currentSlide == slidesCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

// Remove Active From Bullets And Images
function removeAllActive() {
  for (let i = 0; i < slidesCount; i++) {
    //
    sliderImages[i].classList.remove("active");

    paginationUl.children[i].classList.remove("active");
  }
}
